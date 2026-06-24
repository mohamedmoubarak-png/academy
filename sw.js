/* ═══════════════════════════════════════════
   sw.js — Service Worker لـ دفتر البرمجة
   يتيح التثبيت كـ PWA والعمل دون اتصال
═══════════════════════════════════════════ */

const CACHE = 'daftar-albarmaja-v1';

// الملفات الأساسية للتخزين المؤقت (مسارات نسبية لموقع الـ SW)
const CORE_ASSETS = [
  './',
  './index.html',
  './css/shared.css',
  './css/home.css',
  './css/notebook.css',
  './js/data/courses.js',
  './js/progress.js',
  './js/lesson-editor.js',
  './icon.svg',
  './manifest.json',
];

// التثبيت: تخزين الملفات الأساسية
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(
        CORE_ASSETS.map((url) => cache.add(url))
      ))
      .then(() => self.skipWaiting())
  );
});

// التفعيل: حذف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// الجلب: الكاش أولاً ثم الشبكة (مع تحديث الكاش)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        // تخزين النسخ الناجحة من نفس الأصل
        if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);

      return cached || network;
    })
  );
});
