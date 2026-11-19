#!/usr/bin/env node
'use strict';
// Manual quality gate: node scripts/validate-story-theater.cjs
// Intentionally no GitHub Actions workflow and no deployment trigger.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const fail = [];
const warns = [];
let data;
try { data = JSON.parse(read('data/story-theater-stories.json')); }
catch (e) { console.error('Invalid story JSON:', e.message); process.exit(1); }
const ids = new Set(), media = new Set();
let count = 0, vocabCount = 0, quizCount = 0, missingMedia = 0;
if (!Array.isArray(data.stories) || data.stories.length !== 2) fail.push('Expected exactly two stories for this release.');
for (const story of data.stories || []) {
  if (ids.has(story.id)) fail.push('Duplicate story ID ' + story.id);
  ids.add(story.id);
  if (!story.title || !story.level || !story.cefr || !story.subtitle) fail.push('Story metadata incomplete: ' + story.id);
  if (!Array.isArray(story.scenes) || story.scenes.length !== 6) fail.push('Expected six scenes in ' + story.id);
  if (!Array.isArray(story.vocab) || story.vocab.length < 6) fail.push('Vocabulary too short: ' + story.id);
  if (!Array.isArray(story.questions) || story.questions.length < 3) fail.push('Comprehension too short: ' + story.id);
  vocabCount += (story.vocab || []).length;
  for (const [i, scene] of (story.scenes || []).entries()) {
    count++;
    const number = String(i + 1).padStart(2, '0');
    const prefix = 'assets/story-theater/' + story.id + '/scene-' + number;
    if (scene.image !== prefix + '.webp') fail.push('Unexpected image path: ' + story.id + ' ' + number);
    if (scene.audio !== prefix + '.mp3') fail.push('Unexpected audio path: ' + story.id + ' ' + number);
    if (!scene.text || !scene.ja || !scene.alt) fail.push('Missing scene content: ' + story.id + ' ' + number);
    if (!scene.grammar || !scene.text.includes(scene.grammar.focus) ||
        !Array.isArray(scene.grammar.parts) || !scene.grammar.parts.length ||
        !scene.grammar.note) fail.push('Grammar is not aligned to narration: ' + story.id + ' ' + number);
    const slash = String.fromCharCode(92);
    const clickable = (story.vocab || []).flatMap(item => [item.term].concat(item.forms || []))
      .filter(term => /^[a-z ]+$/i.test(term))
      .some(term => new RegExp(slash + 'b' + term.split(' ').join(slash + 's+') + slash + 'b', 'i').test(scene.text));
    if (!clickable) fail.push('No clickable vocabulary in scene: ' + story.id + ' ' + number);
    for (const file of [scene.image, scene.audio]) {
      if (media.has(file)) fail.push('Duplicate asset path ' + file);
      media.add(file);
      if (!fs.existsSync(path.join(root, file))) missingMedia++;
    }
  }
  for (const item of story.vocab || []) {
    if (!item.term || !item.pos || !item.ja || !item.detail || !item.example)
      fail.push('Incomplete vocabulary: ' + story.id + ' ' + item.term);
  }
  for (const question of story.questions || []) {
    quizCount++;
    if (!question.question || !Array.isArray(question.options) ||
      question.options.length !== 4 || !Number.isInteger(question.answer) ||
      question.answer < 0 || question.answer > 3 || !question.explanation)
      fail.push('Invalid quiz question: ' + story.id);
  }
}
try {
  new vm.Script(read('story-theater.js'), { filename: 'story-theater.js' });
  new vm.Script(read('copeak-pages.js'), { filename: 'copeak-pages.js' });
} catch (e) { fail.push('JavaScript syntax: ' + e.message); }
if (!read('copeak-pages.js').includes('cpStoryTheaterEntry')) fail.push('Copeak reader entry is missing.');
if (!read('story-theater.html').includes('story-theater.js')) fail.push('Story Theater script not loaded.');
if (!fs.existsSync(path.join(root,'assets/story-theater/library-hall.svg'))) fail.push('Cinematic library backdrop missing.');
if (!fs.existsSync(path.join(root,'assets/story-theater/the-box-of-letters/cover.svg'))) fail.push('Second story fallback cover missing.');
if (missingMedia) warns.push(missingMedia + ' scene images or audio files not supplied: illustration placeholder and browser TTS will be used.');
console.log(JSON.stringify({ stories: ids.size, scenes: count, vocabulary: vocabCount,
  comprehensionQuestions: quizCount, assetPaths: media.size, warnings: warns, errors: fail }, null, 2));
if (fail.length) process.exit(1);
