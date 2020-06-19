$(document).ready(function(){
    $("#banner-placeholder").load("templates/banner.html");
});

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