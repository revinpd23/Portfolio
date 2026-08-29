/* =========================
   MOBILE NAVIGATION
========================= */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close menu after clicking */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Data Analyst",
    "Telecommunications Engineer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}

typingEffect();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
