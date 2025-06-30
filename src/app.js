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
const titles = [
    "Software Engineer",
    "Salesforce Developer",
    "Technical Consultant",
    "MuleSoft Developer",
    "Full Stack Developer",
    "Cloud Integration Specialist",
    "API Engineer",
    "DevOps Consultant",
    "CRM Strategist",
    "Backend Engineer",
    "Solution Engineer",
    "Integration Developer",
    "Data Migration Expert",
    "CI/CD Engineer",
    "JavaScript Developer",
    "Technical Architect"
  ];

  const track = document.querySelector(".text-track");

  // Populate track
  titles.forEach(title => {
    const span = document.createElement("span");
    span.textContent = title;
    track.appendChild(span);
  });

  let currentIndex = 0;

  function spinLikeCrazyThenPause() {
    let spins = 15 + Math.floor(Math.random() * 10); // Randomized spins for drama
    let spinInterval = 100; // Fast spinning speed

    const spin = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      track.style.transition = "transform 0.15s ease-in-out";
      track.style.transform = `translateY(-${currentIndex * 3}rem)`;
      spins--;

      if (spins <= 0) {
        clearInterval(spin);
        setTimeout(spinLikeCrazyThenPause, 3500); // Hold on current title for ~3.5 seconds
      }
    }, spinInterval);
  }

  spinLikeCrazyThenPause();

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
