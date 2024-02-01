document.addEventListener("DOMContentLoaded", function() {
    var parallax = document.querySelector('.parallax');
    var content = document.querySelector('.content');

    function updateParallaxHeight() {
        parallax.style.height = content.clientHeight + 'px';
    }

    // Initial height update
    updateParallaxHeight();

    window.addEventListener('resize', updateParallaxHeight);
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        background.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    });
});
