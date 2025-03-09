// script.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.bars');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Typing animation initialization
document.addEventListener('DOMContentLoaded', function() {
  new Typed('#typed-output', {
    strings: ['Cybersecurity Specialist', 'Full-Stack Developer', 'Cloud Security Expert'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});

// Reveal animations on scroll
window.addEventListener('scroll', revealSections);

function revealSections() {
  const reveals = document.querySelectorAll('.section-title, .skill-card, .project-card');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}