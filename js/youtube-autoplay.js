// youtube-autoplay.js

let player;

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('ytplayer', {
    events: {
      onReady: onPlayerReady
    }
  });
};

function onPlayerReady(event) {
  const videoTab = document.querySelector('#videoTab');

  const playVideoWithSound = () => {
    if (videoTab && videoTab.classList.contains('active')) {
      event.target.unMute();
      event.target.playVideo();
    }
  };

  const pauseVideoIfInactive = () => {
    if (!videoTab.classList.contains('active')) {
      event.target.pauseVideo();
    }
  };

  // Trigger play on first user interaction
  document.addEventListener('click', playVideoWithSound, { once: true });

  // Watch for tab changes
  const observer = new MutationObserver(() => {
    if (videoTab.classList.contains('active')) {
      event.target.playVideo();
    } else {
      event.target.pauseVideo();
    }
  });

  observer.observe(videoTab, { attributes: true, attributeFilter: ['class'] });
}
