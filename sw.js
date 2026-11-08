// Service worker minimal: hanya agar aplikasi bisa dipasang di layar utama.
// Tidak menyimpan (cache) data apa pun. Absensi, SPP, jadwal, dan login
// selalu diambil langsung dari server, jadi tidak ada data lama yang tertinggal.

self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // Hanya membuka halaman; permintaan data lain tidak disentuh.
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request));
  }
});
