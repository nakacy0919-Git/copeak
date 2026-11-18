const test = require('node:test');
const assert = require('node:assert/strict');
const {
  storedLesson, restoreRuntimeLesson, publicLibraryLessons,
  mustReopenFromClassroom, scrubExisting
} = require('../private-intro-storage.js');

function personal(id, studentId = 'studentA') {
  return {
    id, privateIntro: true, classroomSource: true,
    classroomStudentId: studentId, classroomAssignmentId: 'assignment1',
    title: 'My Introduction', eng: 'Hi, I am Aki. I enjoy playing tennis.',
    jpn: 'こんにちは、アキです。', audioBlob: { secret: true },
    audioUrl: 'https://example.org/secret.mp3', memoImage: 'data:image/png;base64,PRIVATE',
    dialogue: [{ speaker: 'Aki', text: 'Secret' }],
    focusRanges: [{ start: 0, end: 3 }], scoreExclusions: ['Aki'],
    history: [{ mode: 'reading', score: 91, wpm: 113,
      classroomSync: { transport: 'direct', status: 'pending', result: { resultId: 'r1' } } }],
    classroomCredentialId: 'credential-1'
  };
}

test('private lesson writes a metadata-only shell and keeps result history', () => {
  const runtime = personal(7);
  const stored = storedLesson(runtime);
  assert.notStrictEqual(stored, runtime);
  for (const field of ['eng', 'jpn']) assert.equal(stored[field], '');
  for (const field of ['audioUrl', 'audioBlob', 'memoImage']) assert.equal(stored[field], null);
  for (const field of ['dialogue', 'focusRanges', 'scoreExclusions']) assert.deepEqual(stored[field], []);
  assert.equal(stored.classroomStudentId, 'studentA');
  assert.equal(stored.history[0].classroomSync.status, 'pending');
  assert.equal(runtime.eng.startsWith('Hi,'), true);
});

test('ordinary Text and Dialogue lessons are unchanged', () => {
  const regular = { id: 1, privateIntro: false, eng: 'A normal assignment' };
  assert.strictEqual(storedLesson(regular), regular);
  assert.deepEqual(publicLibraryLessons([regular, personal(2)]), [regular]);
});

test('Direct Sync updates preserve only the matching student active text', () => {
  const active = personal(9, 'studentA');
  const saved = storedLesson(active);
  saved.classroomCredentialId = 'renewed-credential';
  const restored = restoreRuntimeLesson(saved, active);
  assert.equal(restored.eng, active.eng);
  assert.equal(restored.classroomCredentialId, 'renewed-credential');
  assert.equal(restoreRuntimeLesson(saved, personal(9, 'studentB')).eng, '');
  assert.equal(restoreRuntimeLesson(saved, personal(10, 'studentA')).eng, '');
});

test('persisted private shells must be reopened from Classroom', () => {
  assert.equal(mustReopenFromClassroom(storedLesson(personal(3))), true);
  assert.equal(mustReopenFromClassroom(personal(3)), false);
  assert.equal(mustReopenFromClassroom({ eng: '', privateIntro: false }), false);
});

test('startup scrub redacts legacy saved private text, preserves other materials', async () => {
  const regular = { id: 10, eng: 'Standard textbook', privateIntro: false };
  const oldPrivate = personal(15);
  const records = [regular, oldPrivate];
  const database = {
    transaction(name, mode) {
      assert.equal(name, 'CustomLessons');
      assert.equal(mode, 'readwrite');
      const transaction = {
        error: null,
        objectStore() {
          return {
            openCursor() {
              const req = { onsuccess: null };
              queueMicrotask(() => {
                let index = 0;
                function next() {
                  if (index >= records.length) {
                    req.onsuccess?.({ target: { result: null } });
                    queueMicrotask(() => transaction.oncomplete?.());
                    return;
                  }
                  const pointer = index;
                  req.onsuccess?.({ target: {
                    result: {
                      value: records[pointer],
                      update(value) { records[pointer] = value; },
                      continue() { index++; queueMicrotask(next); }
                    }
                  } });
                }
                next();
              });
              return req;
            }
          };
        }
      };
      return transaction;
    }
  };
  const changed = await scrubExisting(database);
  assert.equal(changed, 1);
  assert.equal(records[0].eng, regular.eng);
  assert.equal(records[1].eng, '');
  assert.equal(records[1].history[0].score, 91);
});

test('source-level regression guards prevent re-persisting personal passages', () => {
  const { readFileSync } = require('node:fs');
  const { resolve } = require('node:path');
  const app = readFileSync(resolve(__dirname, '../app-bundle.js'), 'utf8');
  const sync = readFileSync(resolve(__dirname, '../classroom-sync.js'), 'utf8');
  const html = readFileSync(resolve(__dirname, '../index.html'), 'utf8');
  const library = readFileSync(resolve(__dirname, '../copeak-library.js'), 'utf8');
  assert.match(app, /store\.put\(window\.CopeakPrivateIntroStorage\.storedLesson\(existingLesson\)\)/);
  assert.match(app, /window\.CopeakPrivateIntroStorage\.storedLesson\(newLessonData\)/);
  assert.match(app, /store\.put\(window\.CopeakPrivateIntroStorage\.storedLesson\(lesson\)\)/);
  assert.match(app, /await window\.CopeakPrivateIntroStorage\.scrubExisting\(db, storeName\)/);
  assert.match(sync, /window\.CopeakPrivateIntroStorage\.restoreRuntimeLesson/);
  assert.match(library, /publicLibraryLessons\(request\.result \|\| \[\]\)/);
  assert.ok(html.indexOf('private-intro-storage.js') < html.indexOf('app-bundle.js'));
});


test('local custom lesson editor rejects private Classroom shells before rewriting', () => {
  const { readFileSync } = require('node:fs');
  const { resolve } = require('node:path');
  const source = readFileSync(resolve(__dirname, '../app-bundle.js'), 'utf8');
  const start = source.indexOf('async function saveCustomLesson()');
  const end = source.indexOf('function finishSaveProcess(', start);
  assert.ok(start >= 0 && end > start);
  const editor = source.slice(start, end);
  assert.match(editor, /if \(window\.CopeakPrivateIntroStorage\.isPrivate\(lesson\)\)/);
  assert.match(editor, /自己紹介はClassroomから編集してください/);
});
