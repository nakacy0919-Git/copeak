/* Shared-device privacy guard for Classroom personalized passages.
 * The student's self-introduction must never be written to IndexedDB.
 * Store only an inert shell, practice history, and Direct Sync metadata.
 */
(function (root) {
  'use strict';

  function isPrivate(lesson) {
    return lesson?.privateIntro === true;
  }

  function storedLesson(lesson) {
    if (!isPrivate(lesson)) return lesson;
    return {
      ...lesson,
      eng: '',
      jpn: '',
      dialogue: [],
      focusRanges: [],
      scoreExclusions: [],
      audioBlob: null,
      audioUrl: null,
      memoImage: null,
      youtubeVideoId: null,
      youtubeStartSeconds: null,
      youtubeEndSeconds: null,
      // Avoid persisting an unsanitized text shadow under a new field.
      privateIntro: true
    };
  }

  function restoreRuntimeLesson(saved, current) {
    if (!isPrivate(saved) || !isPrivate(current) ||
        saved.id !== current.id ||
        saved.classroomStudentId !== current.classroomStudentId ||
        saved.classroomAssignmentId !== current.classroomAssignmentId) {
      return saved;
    }
    return {
      ...saved,
      eng: current.eng || '',
      jpn: current.jpn || '',
      dialogue: Array.isArray(current.dialogue) ? current.dialogue : [],
      focusRanges: Array.isArray(current.focusRanges) ? current.focusRanges : [],
      scoreExclusions: Array.isArray(current.scoreExclusions) ? current.scoreExclusions : []
    };
  }

  function publicLibraryLessons(lessons) {
    return Array.isArray(lessons) ? lessons.filter(lesson => !isPrivate(lesson)) : [];
  }

  function mustReopenFromClassroom(lesson) {
    return isPrivate(lesson) && !String(lesson.eng || '').trim();
  }

  // Upgrade safety: if an earlier app build persisted a private passage,
  // remove it before any Library UI renders or Direct Sync resumes.
  async function scrubExisting(database, storeName = 'CustomLessons') {
    if (!database) throw new Error('Storage unavailable');
    return new Promise((resolve, reject) => {
      let changed = 0;
      const tx = database.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const cursorRequest = store.openCursor();
      cursorRequest.onsuccess = event => {
        const cursor = event.target.result;
        if (!cursor) return;
        const lesson = cursor.value;
        if (isPrivate(lesson) &&
            (lesson.eng || lesson.jpn || lesson.audioBlob || lesson.audioUrl ||
             lesson.memoImage || lesson.dialogue?.length ||
             lesson.focusRanges?.length || lesson.scoreExclusions?.length)) {
          cursor.update(storedLesson(lesson));
          changed++;
        }
        cursor.continue();
      };
      tx.oncomplete = () => resolve(changed);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error('Cannot sanitize private lessons'));
    });
  }

  const api = {
    isPrivate, storedLesson, restoreRuntimeLesson,
    publicLibraryLessons, mustReopenFromClassroom, scrubExisting
  };
  root.CopeakPrivateIntroStorage = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
