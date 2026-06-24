/**
 * lesson-editor.js — منطق المحرر الكودي المشترك
 * دفتر البرمجة
 * يُضمَّن في كل صفحة درس
 */

// ═══════════════ CODE EDITOR ═══════════════

function runCode(btn) {
  const tryIt = btn.closest('.try-it');
  tryIt.querySelector('iframe').srcdoc = tryIt.querySelector('.try-it-editor').value;
}

function resetCode(btn) {
  const tryIt = btn.closest('.try-it');
  const editor = tryIt.querySelector('.try-it-editor');
  editor.value = editor.dataset.default;
  tryIt.querySelector('iframe').srcdoc = editor.value;
}

// ═══════════════ COPY CODE ═══════════════

function copyCode(btn) {
  const pre = btn.closest('.code-box').querySelector('pre');
  const text = pre ? pre.innerText : '';
  if (navigator.clipboard && text) {
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      btn.textContent = '✓ تم النسخ';
      setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '📋 نسخ'; }, 2000);
    });
  }
}

// ═══════════════ SOLUTION TOGGLE ═══════════════

function toggleSolution(btn) {
  const solution = btn.nextElementSibling;
  solution.classList.toggle('show');
  btn.textContent = solution.classList.contains('show') ? 'إخفاء الحل ▲' : 'عرض الحل ▼';
}

// ═══════════════ TOAST ═══════════════

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ═══════════════ INIT ON LOAD ═══════════════

window.addEventListener('load', () => {
  // تشغيل المحررات الكودية تلقائياً
  document.querySelectorAll('.try-it').forEach(tryIt => {
    const editor = tryIt.querySelector('.try-it-editor');
    const iframe = tryIt.querySelector('iframe');
    if (editor && iframe) iframe.srcdoc = editor.value;
  });

  // دعم Tab key في المحررات
  document.querySelectorAll('.try-it-editor').forEach(editor => {
    editor.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, s) + '  ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = s + 2;
      }
    });
  });

  // زر الصعود لأعلى الصفحة
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 300);
    });
  }

  // Smooth scroll للفهرس
  document.querySelectorAll('.toc-card a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
