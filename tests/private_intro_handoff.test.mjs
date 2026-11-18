import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const bundle = readFileSync(resolve(here, '../app-bundle.js'), 'utf8');
const start = bundle.indexOf('async function checkUrlParameters(overrideParams = null)');
const end = bundle.indexOf('// ★ Classic Share:', start);
const handshake = bundle.slice(start, end);

test('private introduction waits for a recognized Classroom origin', () => {
  assert.ok(start > 0);
  assert.match(handshake, /trustedOrigins\.has\(classroomOrigin\)/);
  assert.match(handshake, /event\.source !== window\.opener/);
  assert.match(handshake, /event\.origin !== classroomOrigin/);
});

test('private introduction requires matching assignment, student and one-time nonce', () => {
  assert.match(handshake, /data\.nonce !== nonce/);
  assert.match(handshake, /data\.assignmentId !== assignmentId/);
  assert.match(handshake, /data\.studentId !== studentId/);
  assert.match(handshake, /uuid\.test\(nonce/);
  assert.match(handshake, /accepted = true/);
});

test('personal writing never goes into the address bar or history', () => {
  assert.match(handshake, /incoming\.set\('eng', data\.text\)/);
  assert.match(handshake, /checkUrlParameters\(incoming\)/);
  assert.doesNotMatch(handshake, /history\.(pushState|replaceState)\([^)]*data\.text/);
  assert.doesNotMatch(handshake, /location\.(href|replace|assign)\([^)]*data\.text/);
});

test('invalid or oversized payload cannot enter the lesson importer', () => {
  assert.match(handshake, /typeof data\.text !== 'string'/);
  assert.match(handshake, /!data\.text\.trim\(\)/);
  assert.match(handshake, /data\.text\.length > 6000/);
  assert.match(handshake, /data\?\.type !== 'copeak-classroom-intro-payload'/);
});

test('legacy URL-based lesson import stays present', () => {
  assert.match(bundle, /if \(urlParams\.has\('eng'\)\)/);
  assert.match(bundle, /startCustomLesson\(\s*newLessonData\s*\)/);
  assert.match(bundle, /classroomAssignmentId:/);
});
