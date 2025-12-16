function openSecret(btn) {
  // tampilkan foto rahasia
  const secret = document.getElementById('secret');
  secret.style.display = 'block';

  // mainkan musik (aman dari blok autoplay)
  const bgm = document.getElementById('bgm');
  bgm.play().catch(() => {});

  // sembunyikan tombol
  if (btn) btn.style.display = 'none';

  // efek hati
  for (let i = 0; i < 20; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = '💗';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}
