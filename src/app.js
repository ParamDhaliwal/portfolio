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

// Show toast after page load
  window.addEventListener('load', () => {
    const toast = document.getElementById('toast');
    const closeBtn = document.getElementById('close-btn');

    // Show after 1 seconds
    setTimeout(() => {
      toast.classList.add('show');

      // Auto-hide after 8 seconds
      setTimeout(() => hideToast(), 8000);
    }, 1000);

    // Manual close
    closeBtn.addEventListener('click', hideToast);

    function hideToast() {
      toast.classList.remove('show');
      toast.classList.add('hide');

      // Wait for animation to finish before hiding completely
      setTimeout(() => {
        toast.classList.remove('hide');
        toast.style.visibility = 'hidden';
      }, 400);
    }
  });

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

const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

// Create random particles
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 3 + 1
  });
}

// Draw particles and connecting lines
function animate() {
  ctx.clearRect(0, 0, width, height);
  
  // Draw connections
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        ctx.strokeStyle = `rgba(255,165,0,${1 - dist/150})`; // orange fading
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw particles
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

// Resize canvas
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
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

const track = document.querySelector(".text-track");
let current = 0;

function setupWords() {
  words.forEach((w, idx) => {
    const span = document.createElement("span");
    span.classList.add("word");
    if (idx === 0) span.classList.add("show");
    span.textContent = w;
    track.appendChild(span);
  });
}

function rotateWords() {
  const wordSpans = track.querySelectorAll(".word");
  const prev = wordSpans[current];
  prev.classList.remove("show");

  current = (current + 1) % words.length;
  const next = wordSpans[current];
  next.classList.add("show");
}

setupWords();
setInterval(rotateWords, 2500); // change 3000 → 4000 if you want slower


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



















