document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');
    const menuIcon = document.getElementById('menu-icon');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const crossIcon = document.getElementById('cross-icon');

    navToggle.addEventListener('click', function () {
        navContent.classList.toggle('hidden');

        // Toggle the menu icon between hamburger and cross
        hamburgerIcon.classList.toggle('hidden');
        crossIcon.classList.toggle('hidden');
    });

    // Close the navigation content when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!navContent.contains(event.target) && !navToggle.contains(event.target)) {
            navContent.classList.add('hidden');
            // Ensure the icon resets to hamburger when content is closed
            hamburgerIcon.classList.remove('hidden');
            crossIcon.classList.add('hidden');
        }
    });
});
