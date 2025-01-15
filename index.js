window.addEventListener('scroll', function() {
    const shadow = document.querySelector('.shadow');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    const headerHeight = header.offsetHeight;
    const navHeight = nav.offsetHeight;

    if (window.scrollY > headerHeight - navHeight) {
        shadow.classList.add('hidden'); // Hide the shadow beyond the navbar
    } else {
        shadow.classList.remove('hidden'); // Show the shadow within the header
    }
});
