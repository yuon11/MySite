//<-- CONTROLS INDEX PAGE IMAGES -->

// Array of background image URLs
const images = [
  'url("img/YuonGraduation.jpg")',
  'url("img/landing_page_headshot.jpg")'
];

let currentIndex = 0;

function changeBackground() {
  // Get the target element
  const box = document.getElementById('index-page-carousel');

  // Update index
  currentIndex = (currentIndex + 1) % images.length;

  // Set the new background image
  box.style.backgroundImage = images[currentIndex];
}

// Start switching images every 20 seconds (20000ms)
setInterval(changeBackground, 20000);

//<-- Second set of images -->

const about_images = [
  'url("img/shatterproof.jpg")',
  'url("img/shatterproof2.jpg")',
  'url("img/shatterproof3.jpg")'
];

let currentIndex2 = 0;

function changeAboutBackground() {
  // Get the target element
  const box = document.getElementById('index-page-carousel-2');

  // Update index
  currentIndex2 = (currentIndex2 + 1) % about_images.length;

  // Set the new background image
  box.style.backgroundImage = about_images[currentIndex2];
}

// Start switching images every 20 seconds (20000ms)
setInterval(changeAboutBackground, 20000);

//<-- END OF CONTROLS INDEX PAGE IMAGES -->