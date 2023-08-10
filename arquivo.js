(function () {
    var menu = document.getElementById('grid-nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1800) menu.classList.add('sticky');
        else menu.classList.remove('sticky');
    });
})();