// script.js
// This file adds interactivity to the resume website, including a
// responsive navigation menu, automatic highlighting of active sections
// while scrolling, reveal animations when elements enter the viewport
// and a simple form handler for the contact form. No external
// dependencies are required.

document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile navigation menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Highlight navigation links on scroll
  const sections = document.querySelectorAll('main section');
  const navItems = document.querySelectorAll('.navbar ul li a');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90; // adjust for fixed nav height
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

  // Reveal elements when they come into view
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.1
  };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Simple contact form handler
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Provide feedback to the user
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});