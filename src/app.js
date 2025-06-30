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

const titles = [
    "Software Engineer",
    "Salesforce Developer",
    "Technical Consultant",
    "MuleSoft Developer"
];

const track = document.querySelector(".text-track");

// Populate the track with title spans
titles.forEach(title => {
const span = document.createElement("span");
span.textContent = title;
track.appendChild(span);
});

// Clone the first item and append for seamless looping
const clone = track.firstElementChild.cloneNode(true);
track.appendChild(clone);

let index = 0;
const intervalTime = 2000; // 2 seconds

setInterval(() => {
index++;
track.style.transform = `translateY(-${index * 2.5}rem)`;

// Reset after last item (with smooth loop)
if (index === titles.length) {
  setTimeout(() => {
    track.style.transition = "none";
    track.style.transform = `translateY(0)`;
    index = 0;
    // Force reflow then re-enable transition
    void track.offsetWidth;
    track.style.transition = "transform 0.6s ease-in-out";
  }, 600); // Must match transition duration
}
}, intervalTime);

let i = 0; // Current role index
let j = 0; // Current character index in the role
let isDeleting = false;
const typingSpeed = 150; // Speed for typing characters
const deletingSpeed = 100; // Speed for deleting characters
const pauseAfterTyping = 2000; // Pause after typing a full word
const pauseBeforeNextWord = 500; // Pause before typing the next word

function type() {
    const dynamicText = document.querySelector('.dynamic-text');
    const currentRole = roles[i];

    if (!isDeleting) {
        // Typing forward
        dynamicText.textContent = currentRole.substring(0, j + 1);  // Display up to j+1 characters
        j++;

        if (j === currentRole.length) {
            // Word is fully typed, pause before deleting
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, deletingSpeed); // Start deleting after pause
            }, pauseAfterTyping);
        } else {
            // Continue typing
            setTimeout(type, typingSpeed);
        }
    } else {
        // Deleting backward
        dynamicText.textContent = currentRole.substring(0, j); // Show up to j characters while deleting
        j--;

        if (j < 0) {
            // Word is fully deleted, move to the next word
            isDeleting = false;
            i = (i + 1) % roles.length; // Loop to the next role
            setTimeout(type, pauseBeforeNextWord);
        } else {
            // Continue deleting
            setTimeout(type, deletingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', type);

document.addEventListener('DOMContentLoaded', type);
