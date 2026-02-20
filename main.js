/* =============================================
   Flying Agents — Main JS
   ============================================= */

(function () {
  'use strict';

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---------- Mobile menu toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger to X
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // ---------- Scroll-triggered animations ----------
  const animElements = document.querySelectorAll('.anim-fade-up, .anim-scale-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animElements.forEach((el) => observer.observe(el));

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
