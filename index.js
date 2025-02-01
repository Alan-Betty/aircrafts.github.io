
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





// function submitForm() {
//     let confirmation = document.getElementById("confirmation");
//     confirmation.style.opacity = "1";
    
//     // Create radar effect
//     let radar = document.createElement("div");
//     radar.classList.add("radar-effect");
//     document.body.appendChild(radar);
    
//     setTimeout(() => {
//         confirmation.style.opacity = "0";
//         radar.remove();
//     }, 2000);
// }




document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simple form validation (add more as needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        // Show confirmation message with glitch effect
        const confirmation = document.getElementById('confirmation');
        confirmation.style.visibility = 'visible';
        
        // Add glitch animation class
        confirmation.classList.add('glitch');

        // Reset the form after submission
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            confirmation.style.visibility = 'hidden'; // Hide confirmation message
            confirmation.classList.remove('glitch'); // Remove glitch animation
        }, 3000); // Hide confirmation after 3 seconds
    } else {
        alert('Please fill in all fields.');
    }
});

