$(document).ready(function(){
    $("#banner-placeholder").load("templates/banner.html");
});

// When a user clicks on a button, all <p> elements will be hidden:

// Example
$(document).ready(function(){
  $("#hideable").click(function(){
    $("p").hide();
  });
});