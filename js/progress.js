/**
 * progress.js — نظام تتبع التقدم
 * دفتر البرمجة
 * بيستخدم localStorage لحفظ تقدم المتعلم
 */

const Progress = (() => {

  const KEY_PREFIX = 'academy_';

  // الحصول على مفتاح التخزين لدرس معين
  function lessonKey(courseId, lessonId) {
    return `${KEY_PREFIX}${courseId}_lesson_${lessonId}`;
  }

  // الحصول على مفتاح تخزين المسار
  function courseKey(courseId) {
    return `${KEY_PREFIX}${courseId}`;
  }

  // ═══════════════ الدروس ═══════════════

  /** هل الدرس مكتمل؟ */
  function isLessonComplete(courseId, lessonId) {
    return localStorage.getItem(lessonKey(courseId, lessonId)) === 'complete';
  }

  /** علّم الدرس كمكتمل */
  function markLessonComplete(courseId, lessonId) {
    localStorage.setItem(lessonKey(courseId, lessonId), 'complete');
    if (typeof gtag === 'function') {
      gtag('event', 'lesson_complete', {
        course_id: courseId,
        lesson_id: lessonId,
      });
    }
  }

  /** إلغاء إكمال الدرس */
  function markLessonIncomplete(courseId, lessonId) {
    localStorage.removeItem(lessonKey(courseId, lessonId));
  }

  /** تبديل حالة إكمال الدرس */
  function toggleLessonComplete(courseId, lessonId) {
    if (isLessonComplete(courseId, lessonId)) {
      markLessonIncomplete(courseId, lessonId);
      return false;
    } else {
      markLessonComplete(courseId, lessonId);
      return true;
    }
  }

  // ═══════════════ المسار ═══════════════

  /** جلب قائمة الدروس المكتملة لمسار معين */
  function getCompletedLessons(courseId, totalLessons) {
    const completed = [];
    for (let i = 1; i <= totalLessons; i++) {
      if (isLessonComplete(courseId, i)) {
        completed.push(i);
      }
    }
    return completed;
  }

  /** نسبة التقدم في المسار (0-100) */
  function getCourseProgress(courseId, totalLessons) {
    if (!totalLessons) return 0;
    const completed = getCompletedLessons(courseId, totalLessons);
    return Math.round((completed.length / totalLessons) * 100);
  }

  /** عدد الدروس المكتملة */
  function getCompletedCount(courseId, totalLessons) {
    return getCompletedLessons(courseId, totalLessons).length;
  }

  // ═══════════════ الشريط الصغير في الدرس ═══════════════

  /** تحديث شريط التقدم في صفحة الدرس */
  function updateLessonProgressBar(courseId, totalLessons) {
    const pct = getCourseProgress(courseId, totalLessons);
    const fill = document.getElementById('progFill');
    const text = document.getElementById('progText');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '%';
  }

  // ═══════════════ الصفحة الرئيسية ═══════════════

  /** تحديث جميع شرائط التقدم في صفحة الـ Hub */
  function updateAllCourseBars() {
    if (typeof COURSES === 'undefined') return;

    COURSES.forEach(course => {
      if (!course.available || !course.totalLessons) return;

      const pct = getCourseProgress(course.id, course.totalLessons);
      const count = getCompletedCount(course.id, course.totalLessons);

      const bar = document.getElementById(`bar-${course.id}`);
      const pctEl = document.getElementById(`pct-${course.id}`);
      const countEl = document.getElementById(`count-${course.id}`);

      if (bar) bar.style.width = pct + '%';
      if (pctEl) pctEl.textContent = pct + '%';
      if (countEl) countEl.textContent = `${count}/${course.totalLessons}`;
    });
  }

  // ═══════════════ تصدير ═══════════════

  return {
    isLessonComplete,
    markLessonComplete,
    markLessonIncomplete,
    toggleLessonComplete,
    getCompletedLessons,
    getCourseProgress,
    getCompletedCount,
    updateLessonProgressBar,
    updateAllCourseBars,
  };

})();
