import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const bundle = readFileSync(resolve(here, '../app-bundle.js'), 'utf8');
const receiver = readFileSync(resolve(here, '../private-intro-receiver.js'), 'utf8');
const html = readFileSync(resolve(here, '../index.html'), 'utf8');
const start = bundle.indexOf('async function checkUrlParameters(overrideParams = null)');
const end = bundle.indexOf('// アプリ起動時の処理（URLチェック', start);
const importer = bundle.slice(start, end);

test('private handoff checks the Classroom origin, student, assignment and nonce', () => {
  assert.ok(start > 0 && end > start);
  assert.match(receiver, /TRUSTED_CLASSROOM_ORIGINS/);
  assert.match(receiver, /event\.source !== opener/);
  assert.match(receiver, /event\.origin !== origin/);
  assert.match(receiver, /data\.nonce !== nonce/);
  assert.match(receiver, /data\.assignmentId !== assignmentId/);
  assert.match(receiver, /data\.studentId !== studentId/);
  assert.match(receiver, /data\.text\.length > MAX_TEXT_LENGTH/);
});

test('import uses in-memory English only, not a history or navigation URL', () => {
  assert.match(importer, /CopeakPrivateIntro\.receive/);
  assert.match(importer, /incoming\.set\('eng', personalText\)/);
  assert.match(importer, /await checkUrlParameters\(incoming\)/);
  assert.doesNotMatch(importer, /location\.(href|replace|assign)\(\s*personalText/);
  assert.doesNotMatch(importer, /history\.(pushState|replaceState)\([^)]*personalText/);
});

test('private introduction uses standard Copeak reading without exposing it in the Library', () => {
  assert.match(importer, /incoming\.set\('type', 'standard'\)/);
  assert.match(importer, /incoming\.set\('private_intro', '1'\)/);
  assert.match(bundle, /privateIntro: lessonTypeForPrivateIntro\(urlParams\)/);
  assert.match(bundle, /CopeakPrivateIntroStorage\.storedLesson\(newLessonData\)/);
  assert.match(bundle, /CopeakPrivateIntroStorage\.storedLesson\(existingLesson\)/);
});

test('private modules load before Copeak main bundle', () => {
  const rx = html.indexOf('private-intro-receiver.js');
  const storage = html.indexOf('private-intro-storage.js');
  const main = html.indexOf('app-bundle.js');
  assert.ok(rx >= 0 && storage > rx && main > storage);
});

test('shared Text and Dialogue lesson URL import continues to work', () => {
  assert.match(bundle, /if \(urlParams\.has\('eng'\)\)/);
  assert.match(bundle, /startCustomLesson\(\s*newLessonData\s*\)/);
  assert.match(bundle, /classroomAssignmentId:/);
});
