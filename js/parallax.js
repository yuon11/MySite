document.addEventListener("DOMContentLoaded", function() {
    var parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        parallax.style.backgroundPositionY = -scrollPosition * 0.4 + 'px';
    });
});
