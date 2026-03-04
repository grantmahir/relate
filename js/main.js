/* ========================================
   Relate Wellness — Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initScrollAnimations();
  setActiveNav();
});

/* ----------------------------------------
   Component Loader
   Loads header.html, footer.html into pages
   ---------------------------------------- */
async function loadComponents() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  // Determine path prefix based on page location
  const basePath = getBasePath();

  if (headerEl) {
    try {
      const res = await fetch(basePath + 'components/header.html');
      if (res.ok) {
        headerEl.innerHTML = await res.text();
        // Re-init after loading
        initMobileMenu();
        initStickyHeader();
        setActiveNav();
      }
    } catch (e) {
      // Header component not available, use inline
    }
  }

  if (footerEl) {
    try {
      const res = await fetch(basePath + 'components/footer.html');
      if (res.ok) {
        footerEl.innerHTML = await res.text();
      }
    } catch (e) {
      // Footer component not available, use inline
    }
  }
}

function getBasePath() {
  // All pages are at root level, so components are at ./components/
  return './';
}

/* ----------------------------------------
   Mobile Menu
   ---------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

/* ----------------------------------------
   Sticky Header
   ---------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ----------------------------------------
   Smooth Scrolling (for anchor links)
   ---------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const position = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    });
  });
}

/* ----------------------------------------
   Scroll Animations
   ---------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(el => observer.observe(el));
}

/* ----------------------------------------
   Active Nav Link
   ---------------------------------------- */
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ----------------------------------------
   Contact Form Handler
   ---------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 2500);
  });
}
