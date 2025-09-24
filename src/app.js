// Existing hamburger menu functionality
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");

// hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
const navLinks  = document.querySelectorAll('.nav-link');

function toggleMenu() {
  const isActive = hamburger.classList.toggle('active');
  navMenu.classList.toggle('active', isActive);

  // Accessibility
  hamburger.setAttribute('aria-expanded', String(isActive));

  // Prevent body scroll when open
  document.documentElement.classList.toggle('body-no-scroll', isActive);
}

hamburger.addEventListener('click', toggleMenu);

// Close on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded','false');
    document.documentElement.classList.remove('body-no-scroll');
  });
});

const words = [
  "Software Engineer",
  "Salesforce Developer",
  "Full Stack Developer",
  "API Engineer",
  "DevOps Consultant",
  "CRM Strategist",
  "Backend Engineer",
  "Solution Architect",
  "CI/CD Engineer",
  "JavaScript Developer",
  "Technical Architect"
];

const rotator = document.querySelector(".word-rotator");

let current = 0;

function setupWords() {
  words.forEach((w, idx) => {
    const span = document.createElement("span");
    span.classList.add("word");
    if (idx === 0) span.classList.add("show");
    span.textContent = w;
    rotator.appendChild(span);
  });
}

function rotateWords() {
  const wordSpans = rotator.querySelectorAll(".word");
  const prev = wordSpans[current];
  prev.classList.remove("show");

  current = (current + 1) % words.length;
  const next = wordSpans[current];
  next.classList.add("show");
}

setupWords();
setInterval(rotateWords, 4000);


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

function scrollCerts(direction) {
  const container = document.querySelector('.cert-container');
  const scrollAmount = 300;

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', type);

document.addEventListener('DOMContentLoaded', type);





