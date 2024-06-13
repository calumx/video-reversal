document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('video');
  const text = document.querySelector('.text');
  const smallText = document.querySelector('.text.small');

  function updateText() {
    const baseText = 'video state: ';
    if (video.paused) {
      text.innerHTML = baseText + '<span style="color: red;">paused</span>';
      smallText.textContent = '(tap or click to play)';
      smallText.classList.remove('hidden');
      smallText.classList.add('visible');
    } else {
      text.innerHTML = baseText + '<span style="color: green;">playing</span>';
      smallText.classList.remove('visible');
      smallText.classList.add('hidden');
    }
  }

  function pauseAt15() {
    if (video.currentTime >= 15) {
      video.pause();
      video.removeEventListener('timeupdate', pauseAt15);
      updateText();
    }
  }

  video.addEventListener('touchstart', function () {
    video.play();
    updateText();
  });

  video.addEventListener('click', function () {
    video.play();
    updateText();
  });

  video.addEventListener('timeupdate', pauseAt15);
  video.addEventListener('pause', updateText);
  video.addEventListener('play', updateText);
});
