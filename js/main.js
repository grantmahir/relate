/* ========================================
   Relate Wellness — Main JavaScript
   PRD3: Interactions & Integrations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initScrollAnimations();
  setActiveNav();
  initContactForm();
  initAnalytics();
});

/* ----------------------------------------
   Component Loader
   Loads header.html, footer.html into pages
   ---------------------------------------- */
async function loadComponents() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  const basePath = getBasePath();

  if (headerEl) {
    try {
      const res = await fetch(basePath + 'components/header.html');
      if (res.ok) {
        headerEl.innerHTML = await res.text();
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
  return './';
}

/* ----------------------------------------
   Mobile Menu
   ---------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  // Remove existing listeners by cloning
  const newToggle = toggle.cloneNode(true);
  toggle.parentNode.replaceChild(newToggle, toggle);

  newToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    newToggle.classList.toggle('active');
    newToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      newToggle.classList.remove('active');
      navLinks.classList.remove('active');
      newToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      newToggle.classList.remove('active');
      navLinks.classList.remove('active');
      newToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      newToggle.focus();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !newToggle.contains(e.target)) {
      newToggle.classList.remove('active');
      navLinks.classList.remove('active');
      newToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ----------------------------------------
   Sticky Header
   ---------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        // Add shadow on scroll
        if (currentScroll > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Hide/show header on scroll direction
        if (currentScroll > 300) {
          if (currentScroll > lastScroll) {
            header.classList.add('header-hidden');
          } else {
            header.classList.remove('header-hidden');
          }
        } else {
          header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
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
        // Set focus on target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
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

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

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
      link.setAttribute('aria-current', 'page');
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

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate send (replace with real endpoint in production)
    setTimeout(() => {
      btn.textContent = 'Message Sent!';
      trackEvent('form_submit', { form: 'contact' });

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 2500);
    }, 800);
  });
}

/* ----------------------------------------
   Analytics — Plausible
   Tracks: page visits (automatic), CTA clicks, tool launches
   ---------------------------------------- */
function initAnalytics() {
  // Track CTA button clicks
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const label = this.textContent.trim();
      const href = this.getAttribute('href') || '';
      trackEvent('cta_click', { label: label, destination: href });
    });
  });

  // Track tool launch clicks
  document.querySelectorAll('.tool-placeholder .btn, .tool-placeholder a').forEach(link => {
    link.addEventListener('click', function () {
      const toolCard = this.closest('.tool-placeholder');
      const toolName = toolCard ? toolCard.querySelector('h3')?.textContent : 'unknown';
      trackEvent('tool_launch', { tool: toolName });
    });
  });

  // Track WhatsApp link clicks
  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function () {
      trackEvent('whatsapp_click', { page: window.location.pathname });
    });
  });

  // Track external platform link clicks
  document.querySelectorAll('a[data-track]').forEach(link => {
    link.addEventListener('click', function () {
      trackEvent('external_link', {
        platform: this.getAttribute('data-track'),
        page: window.location.pathname
      });
    });
  });
}

function trackEvent(name, props) {
  // Plausible Analytics custom events
  if (window.plausible) {
    window.plausible(name, { props: props });
  }
}

/* ----------------------------------------
   Lazy Loading Images
   Adds loaded class when images finish loading
   ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});
