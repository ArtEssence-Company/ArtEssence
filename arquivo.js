(function () {
    var menu = document.getElementById('grid-nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1200) menu.classList.add('sticky');
        else menu.classList.remove('sticky');
    });
})();