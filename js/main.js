
$(document).ready(function(){
  setBanner();
});

function setBanner() {
  var element = document.getElementById("banner-placeholder");
  try {
    console.log("Loading banner temps");
    element.load("templates/banner.html");
  }
  catch(err) {
    console.log("Error hit");
    // $("#banner-placeholder").className = "topnav";  
    // var element = document.getElementById("banner-placeholder");
    element.classList.add("topnav");
  }
}

// $(document).ready(function(){
//   $("#footer").load("");
// });

$(document).ready(function(){
  $("#projects-carousel").load("templates/projects_carousel.html");
});

// When a user clicks on a button, all <p> elements will be hidden:

// Example
$(document).ready(function(){
  $("#hideable").click(function(){
    $("p").hide();
  });
});