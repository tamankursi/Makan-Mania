function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var navMenu = document.querySelector('.nav-menu');
    var toggleButton = document.getElementById('tombol');
    var targetElement = event.target;


    var isClickInsideNavbar = navMenu.contains(targetElement) || toggleButton.contains(targetElement);

    
    if (!isClickInsideNavbar && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});