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

  // Add titles multiple times for spinning effect
  const allTitles = [...titles, ...titles, ...titles];
  allTitles.forEach(title => {
    const span = document.createElement("span");
    span.textContent = title;
    track.appendChild(span);
  });

  let currentIndex = 0;

  function spinWithBlur() {
    let spinSteps = 35 + Math.floor(Math.random() * 10); // More steps = faster blur
    let delay = 50;

    track.classList.add("blurry"); // Add blur before spinning
    track.style.transition = `transform ${delay}ms linear`;

    const spinInterval = setInterval(() => {
      currentIndex++;
      track.style.transform = `translateY(-${currentIndex * 3}rem)`;
      spinSteps--;

      if (spinSteps <= 0) {
        clearInterval(spinInterval);

        setTimeout(() => {
          // Clean landing
          track.classList.remove("blurry");

          // Reset to real index to avoid buildup
          currentIndex = currentIndex % titles.length;
          track.style.transition = "none";
          track.style.transform = `translateY(-${currentIndex * 3}rem)`;

          void track.offsetWidth; // force reflow
          track.style.transition = `transform ${delay}ms linear`;

          setTimeout(spinWithBlur, 3500); // Pause before next spin
        }, 100); // Short pause to remove blur before holding
      }
    }, delay);
  }

  spinWithBlur();

  function toggleMoreAboutMe() {
    const moreText = document.getElementById("more-about-me");
    const toggle = document.querySelector(".expand-toggle");

    const isCollapsed = moreText.classList.contains("collapsed");
    moreText.classList.toggle("collapsed", !isCollapsed);
    moreText.classList.toggle("expanded", isCollapsed);

    toggle.textContent = isCollapsed ? "[−]" : "[+]";
  }

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
