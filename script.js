// tombol play/pause musik (kalau ada <audio id="player"> di HTML)
const playBtn = document.getElementById('playBtn');
const player = document.getElementById('player');

if (playBtn && player){
  let playing = false;
  playBtn.addEventListener('click', () => {
    if(!playing){ player.play(); playBtn.textContent = 'Pause ⏸'; }
    else{ player.pause(); playBtn.textContent = 'Play ▶️'; }
    playing = !playing;
  });
}

// efek hati lucu tiap klik
document.addEventListener('click', (e) => {
  const h = document.createElement('span');
  h.textContent = ['💖','💗','💞'][Math.floor(Math.random()*3)];
  h.style.position = 'fixed';
  h.style.left = e.clientX + 'px';
  h.style.top = e.clientY + 'px';
  h.style.fontSize = (14 + Math.random()*18) + 'px';
  h.style.pointerEvents = 'none';
  h.style.transition = 'transform 1.2s ease, opacity 1.2s ease';
  document.body.appendChild(h);
  requestAnimationFrame(()=>{ h.style.transform = 'translateY(-80px)'; h.style.opacity = '0'; });
  setTimeout(()=>h.remove(), 1300);
});
