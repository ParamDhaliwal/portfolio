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

let i = 0; // Index for the current role
let j = 0; // Index for the current letter of the role
let isDeleting = false;
const typingSpeed = 150; // Speed for typing characters
const deletingSpeed = 100; // Speed for deleting characters
const pauseAfterTyping = 2000; // Pause after typing a word
const pauseBeforeNextWord = 500; // Pause before starting to type the next word

function type() {
    const dynamicText = document.querySelector('.dynamic-text');
    const currentRole = roles[i];
    
    if (!isDeleting) {
        // Typing forward
        dynamicText.textContent = currentRole.substring(0, j);
        j++;
        
        if (j === currentRole.length) {
            // Word is fully typed, pause before deleting
            setTimeout(() => {
                isDeleting = true;
                type();
            }, pauseAfterTyping);
        } else {
            // Continue typing
            setTimeout(type, typingSpeed);
        }
    } else {
        // Deleting backward
        dynamicText.textContent = currentRole.substring(0, j);
        j--;
        
        if (j === 0) {
            // Word is fully deleted, move to the next role and start typing
            isDeleting = false;
            i = (i + 1) % roles.length; // Loop back to the first role after the last one
            setTimeout(type, pauseBeforeNextWord);
        } else {
            // Continue deleting
            setTimeout(type, deletingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', type);
