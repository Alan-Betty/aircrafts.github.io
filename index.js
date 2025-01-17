
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("#main-nav");
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    lastScrollY = window.scrollY;
});

// !Typewriter animation
function typeWriterEffect(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

typeWriterEffect("heading", "Welcome, Flight Enthusiasts!", 100, () => {
    typeWriterEffect(
        "paragraph",
        "Explore the legendary aircraft designed and produced in the USA. From warbirds to modern jets, discover the technology that conquered the skies.",
        30,
        () => {
            document.getElementById("cta-button").style.display = "block"; // Show the button after typing finishes
        }
    );
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Align to the top of the section
            });
        }
    });
});
