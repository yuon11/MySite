
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


//<-- PROJECT CAROUSEL FUNCTIONS -->
// tab-switcher.js

//<-- ENDPROJECT CAROUSEL FUNCTIONS -->