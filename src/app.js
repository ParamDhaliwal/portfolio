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
let currentRole = '';
let isDeleting = false;
const speed = 150; // Typing speed

function type() {
    const dynamicText = document.querySelector('.dynamic-text');

    if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
            currentRole = roles[i].substring(0, j);
            dynamicText.innerHTML = currentRole;
            j++;
        }

        if (isDeleting && j <= roles[i].length) {
            currentRole = roles[i].substring(0, j);
            dynamicText.innerHTML = currentRole;
            j--;
        }

        if (j === roles[i].length) {
            isDeleting = true;
            setTimeout(type, 2000); // Wait before backspacing
        } else if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
            if (i === roles.length) {
                i = 0;
            }
        }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
}

document.addEventListener('DOMContentLoaded', type);
