// THIS HANDLES WHEN THE ARROWS ARE USED TO NAIGATE AWAY FROM A VIDEO
// BUT I MUST ALSO ACCOUNT FOR WHEN TABS ARE USED TO CHANGE THE CAROUSEL
function pauseVideo(){
  // Select all carousels on the page
  const carousels = document.querySelectorAll('.carousel');
  
  // console.log(carousels);

  carousels.forEach(carousel => {
        // Pause all <video> elements inside the carousel
        // console.log("Tab Click");
        const videos = carousel.querySelectorAll(".carousel-video");
        // console.log(videos);
        
        videos.forEach(video => {
          video.pause();
          video.currentTime = 0; // Optional: Reset to start
        });
  });
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".carousel-control-prev, .carousel-control-next")) {
    pauseVideo();
  }
});
