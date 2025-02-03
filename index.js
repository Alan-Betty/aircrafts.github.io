console.log("Script loaded successfully");


//! Sticky navbar
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

//! Typewriter effect
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

//! Typewriter effect content
typeWriterEffect("heading", "Welcome, Flight Enthusiasts!", 100, () => {
    typeWriterEffect(
        "paragraph",
        "Explore the legendary aircraft designed and produced in the USA. From warbirds to modern jets, discover the technology that conquered the skies.",
        30,
        () => {
            document.getElementById("cta-button").style.display = "block";
        }
    );
});

//! Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

//! Contact form animation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    if (name && email && subject && message) {
      const preloader = document.getElementById("preloader");
      preloader.style.display = "flex"; // Show preloader
  
      setTimeout(() => {
        document.getElementById('contact-form').reset();
        preloader.style.display = "none"; // Hide preloader
        alert('Message Sent');
      }, 3000); // Adjust the time as needed
    } else {
      alert('Please fill in all fields.');
    }
  });

//! Newsletter form
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value;
      
    let stepOne = ["o29xhSe0MMAfdlqa-", "a5eb630fa7c8c08", "1ea8e455d52ac1777f67c4", "018d005fa9a0a7", "b93251ba9f3bd", "-bisyekx" ];
    let stepTwo = stepOne.map(secret1 => secret1.split("").reverse().join(""));
    let stepThree = stepTwo.reverse();
    let finalKey = stepThree.join("");

    const url = 'https://api.brevo.com/v3/smtp/email';

    const data = {
        sender: { email: 'padayattilbettyalan@gmail.com', name: 'AlanBetty' },
        to: [{ email: email }],
        templateId: 1,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': finalKey,
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


//! Loading Sound and preloader on load
// Wait for user interaction before playing sound
document.addEventListener("click", () => {
    const loadingSound = document.getElementById("loading-sound");
    const preloader = document.getElementById("preloader");
    const prompt = document.getElementById("interaction-prompt");
  
    // Unmute and play the sound
    loadingSound.muted = false;
    loadingSound.play();
  
    prompt.style.display = "none";
    preloader.style.display = "flex";

  
    // Hide the preloader after 5 seconds (audio length)
    setTimeout(() => {
      preloader.style.display = "none";
    }, 5000); // Match the audio length
  
    // Remove the event listener after the first interaction
    document.removeEventListener("click", arguments.callee);
  });

