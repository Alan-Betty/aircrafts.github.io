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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Remove event.preventDefault(); to allow form submission
    // event.preventDefault(); // Prevent default form submission

    // Simple form validation (add more as needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        // Create overlay
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        // Create radar effect
        let radar = document.createElement("div");
        radar.classList.add("radar-effect");
        document.body.appendChild(radar);

        // Reset the form after submission
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            radar.remove(); // Remove radar effect
            overlay.remove(); // Remove overlay
            // Show alert message after animation
            alert('Message Sent');
        }, 3000); // Hide confirmation after 3 seconds
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('newsletter-email').value;

    // Brevo API endpoint
    const url = 'https://api.brevo.com/v3/smtp/email';

    // Request payload
    const data = {
        sender: { email: 'padayattilbettyalan@gmail.com', name: 'AlanBetty' },
        to: [{ email: email }], // User's email
        templateId: 1, // Replace with your actual template ID
    };

    // API request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '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',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Email sent successfully:', result);
        alert('Thank you for subscribing! Check your email.');
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('Something went wrong. Please try again.');
    });
});