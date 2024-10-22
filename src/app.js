// Existing hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// New typing animation functionality
const roles = [
    'Salesforce Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Technical Consultant'
];

let i = 0;
let j = 0;
let isDeleting = false;
const typingSpeed = 150; // Typing speed
const deletingSpeed = 100; // Deleting speed
const pauseAfterTyping = 2000; // Pause after fully typing a word
const pauseBeforeNextWord = 500; // Pause before starting the next word

function type() {
    const dynamicText = document.querySelector('.dynamic-text');

    if (!isDeleting && j <= roles[i].length) {
        // Typing forward
        dynamicText.innerHTML = roles[i].substring(0, j);
        j++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && j >= 0) {
        // Deleting backwards
        dynamicText.innerHTML = roles[i].substring(0, j);
        j--;
        setTimeout(type, deletingSpeed);
    } 

    // Pause after typing a word
    if (j === roles[i].length && !isDeleting) {
        isDeleting = true;
        setTimeout(type, pauseAfterTyping);
    }

    // Pause before typing the next word
    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % roles.length; // Move to the next role
        setTimeout(type, pauseBeforeNextWord);
    }
}

document.addEventListener('DOMContentLoaded', type);
