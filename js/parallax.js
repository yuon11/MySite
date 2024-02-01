document.addEventListener("DOMContentLoaded", function() {
    var parallax = document.querySelector('.parallax');
    var background = document.querySelector('.parallax-background');
    var content = document.querySelector('.content');

    function updateParallaxHeight() {
        parallax.style.paddingTop = background.clientHeight + 'px';
    }

    // Initial height update
    updateParallaxHeight();

    window.addEventListener('resize', updateParallaxHeight);
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        background.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)';
    });
});
