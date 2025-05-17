
$(document).ready(function(){
  setBanner();
});

function setBanner() {
  try {
    var element = document.getElementById("banner-placeholder");
    console.log("Loading banner temps");
    element.load("templates/banner.html");
  }
  catch(err) {
    console.log("Error hit");
    // $("#banner-placeholder").className = "topnav";  
    // var element = document.getElementById("banner-placeholder");
    // element.classList.add("topnav");
  }
}

function infiniteScroll() {
  var page=1;
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      ifrm = document.createElement("IFRAME"); 
      ifrm.setAttribute("resume_page", page+".html"); 
      ifrm.style.width = 100+"%"; 
      ifrm.style.height = 800+"px"; 
      document.body.appendChild(ifrm); 
      page++
    }
  };
}

// $(document).ready(function(){
//   $("#footer").load("");
// });

$(document).ready(function(){
  $("#mushroom-valley-carousel").load("templates/mushroom_valley_carousel.html");
});

$(document).ready(function(){
  $("#donut-projects-carousel").load("templates/donut_projects_carousel.html");
});

$(document).ready(function(){
  $("#scifibike-projects-carousel").load("templates/scifibike_projects_carousel.html");
});

$(document).ready(function(){
  $("#miamivice-car-carousel").load("templates/miamivice_car_carousel.html");
});

$(document).ready(function(){
  $("#starship-carousel").load("templates/starship_carousel.html");
});

$(document).ready(function(){
  $("#carcrossing-carousel").load("templates/carcrossing_carousel.html");
});

$(document).ready(function(){
  $("#miscellaneous-carousel").load("templates/miscellaneous_carousel.html");
});
// When a user clicks on a button, all <p> elements will be hidden:

// Example
$(document).ready(function(){
  $("#hideable").click(function(){
    $("p").hide();
  });
});

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


//<-- PROJECT CAROUSEL FUNCTIONS -->
// tab-switcher.js

//<-- ENDPROJECT CAROUSEL FUNCTIONS -->