const test = require('node:test');
const assert = require('node:assert/strict');
const { receive, parseContext } = require('../private-intro-receiver.js');

const assignmentId = '11111111-1111-4111-8111-111111111111';
const studentId = '22222222-2222-4222-8222-222222222222';
const nonce = '33333333-3333-4333-8333-333333333333';
const origin = 'https://cc.pic-speak-story.com';

function context(overrides = {}) {
  return new URLSearchParams({
    source: 'copeak-classroom',
    self_intro_handoff: '1',
    classroom_origin: origin,
    classroom_assignment: assignmentId,
    classroom_student: studentId,
    classroom_launch: nonce,
    ...overrides
  });
}
function harness() {
  const handlers = new Set();
  const sent = [];
  const opener = { postMessage(data, targetOrigin) { sent.push({ data, targetOrigin }); } };
  const events = {
    addEventListener(type, handler) { assert.equal(type, 'message'); handlers.add(handler); },
    removeEventListener(type, handler) { assert.equal(type, 'message'); handlers.delete(handler); },
    dispatch({ data, source = opener, eventOrigin = origin }) {
      for (const handler of [...handlers]) handler({ data, source, origin: eventOrigin });
    }
  };
  let scheduled;
  const schedule = fn => { scheduled = fn; return 1; };
  const unschedule = () => { scheduled = null; };
  const validPayload = text => ({
    type: 'copeak-classroom-intro-payload', nonce, assignmentId, studentId, text
  });
  return {
    opener, events, sent, schedule, unschedule, validPayload, get scheduled() { return scheduled; }
  };
}

test('only an allowlisted Classroom origin with correct IDs is accepted', () => {
  assert.equal(parseContext(context()).assignmentId, assignmentId);
  assert.throws(() => parseContext(context({ classroom_origin: 'https://evil.example' })));
  assert.throws(() => parseContext(context({ classroom_student: 'invalid' })));
  assert.throws(() => parseContext(context({ eng: 'Private student writing' })));
  assert.throws(() => parseContext(context({ source: 'not-classroom' })));
});

test('sends ready without private text, imports only validated payload and acknowledges afterwards', async () => {
  const h = harness();
  let imported = '';
  const receiving = receive({ params: context(), opener: h.opener, events: h.events,
    onPayload: async text => { imported = text; }, schedule: h.schedule, unschedule: h.unschedule });
  assert.equal(h.sent.length, 1);
  assert.deepEqual(Object.keys(h.sent[0].data).sort(), ['assignmentId','nonce','studentId','type']);
  assert.equal(h.sent[0].targetOrigin, origin);
  h.events.dispatch({ data: h.validPayload('Wrong origin'), eventOrigin: 'https://evil.example' });
  h.events.dispatch({ data: h.validPayload('Wrong opener'), source: {} });
  h.events.dispatch({ data: { ...h.validPayload('Wrong student'), studentId: assignmentId } });
  assert.equal(imported, '');
  h.events.dispatch({ data: h.validPayload('Hello! I am Aki.') });
  await receiving;
  assert.equal(imported, 'Hello! I am Aki.');
  assert.equal(h.sent.length, 2);
  assert.equal(h.sent[1].data.ok, true);
  assert.equal(h.scheduled, null);
});

test('rejects failed imports with negative ack', async () => {
  const h = harness();
  const receiving = receive({ params: context(), opener: h.opener, events: h.events,
    onPayload: async () => { throw new Error('IndexedDB error'); },
    schedule: h.schedule, unschedule: h.unschedule });
  h.events.dispatch({ data: h.validPayload('Hi, I like reading.') });
  await assert.rejects(receiving, /IndexedDB error/);
  assert.equal(h.sent[1].data.ok, false);
});

test('rejects oversized text and never imports it', async () => {
  const h = harness();
  let imports = 0;
  const receiving = receive({ params: context(), opener: h.opener, events: h.events,
    onPayload: () => { imports += 1; }, schedule: h.schedule, unschedule: h.unschedule });
  h.events.dispatch({ data: h.validPayload('A'.repeat(6001)) });
  assert.equal(imports, 0);
  const rejection = assert.rejects(receiving, /Timed out/);
  h.scheduled();
  await rejection;
  assert.equal(h.sent.length, 1);
});

test('does not send ready when classroom launch is untrusted', async () => {
  const h = harness();
  await assert.rejects(receive({
    params: context({ classroom_origin: 'https://evil.example' }), opener: h.opener,
    events: h.events, onPayload: () => {},
    schedule: h.schedule, unschedule: h.unschedule
  }));
  assert.equal(h.sent.length, 0);
});


test('private receiver strips HTML tag delimiters from student text', async () => {
  const h = harness();
  let imported = '';
  const receiving = receive({ params: context(), opener: h.opener, events: h.events,
    onPayload: text => { imported = text; }, schedule: h.schedule, unschedule: h.unschedule });
  h.events.dispatch({ data: h.validPayload("I <img src=x onerror=alert(1)> like art.") });
  await receiving;
  assert.equal(imported.includes('<'), false);
  assert.equal(imported.includes('>'), false);
  assert.equal(h.sent[1].data.ok, true);
});

test('private lesson share/export and multiplayer paths are guarded', () => {
  const { readFileSync } = require('node:fs');
  const { resolve } = require('node:path');
  const app = readFileSync(resolve(__dirname, '../app-bundle.js'), 'utf8');
  const share = readFileSync(resolve(__dirname, '../quickshare-repair.js'), 'utf8');
  const legacy = readFileSync(resolve(__dirname, '../quickshare.js'), 'utf8');
  assert.match(app, /existingLesson\.privateIntro = lessonTypeForPrivateIntro\(urlParams\)/);
  assert.match(app, /privateIntro: lessonTypeForPrivateIntro\(urlParams\)/);
  assert.match(app, /if \(isPrivateStudentIntroduction\(currentCustomLesson\)\)/);
  assert.match(app, /if \(isPrivateStudentIntroduction\(lesson\)\) throw new Error\('private_lesson'\)/);
  assert.match(app, /isPrivateStudentIntroduction\(currentCustomLesson\)\s*\?\s*'\[Personalized Classroom introduction: private\]'/);
  assert.match(share, /if \(lesson\.privateIntro === true\) throw new Error\('private_lesson'\)/);
  assert.match(share, /if \(lesson\?\.privateIntro === true\) return null/);
  assert.match(legacy, /if \(lesson\?\.privateIntro === true\) throw new Error\('private_lesson'\)/);
});
