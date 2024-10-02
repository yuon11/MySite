// document.addEventListener("DOMContentLoaded", function() {
//     // Get the animated text element
//     var animatedText = document.querySelector('.animated-text');

//     // Add a class to trigger the animation
//     animatedText.classList.add('animate-in');

//     // Listen for the end of the animation, then remove the animate-in class
//     animatedText.addEventListener('transitionend', function() {
//         animatedText.classList.remove('animate-in');
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    // Get the animated text element
    var animatedText = document.querySelector('.animated-text');

    // Add a class to trigger the animation
    animatedText.classList.add('animate-in');

    // Listen for the end of the animation
    animatedText.addEventListener('transitionend', function() {
        // The animation has ended, the text is now in its final visible state
    });
});


