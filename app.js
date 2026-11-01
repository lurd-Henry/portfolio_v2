// Mobile navigation, subtle scroll reveals, and easy contact configuration.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Open navigation' : 'Close navigation'
  );
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});
// Close the mobile menu after clicking a navigation link.
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
// Close the mobile menu when switching to desktop layout.
window.addEventListener('resize', () => {
  if (window.innerWidth >= 600) {
    closeMenu();
  }
});
// Automatically update the copyright year.
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// Reveal sections as they enter the viewport.
const revealTargets = document.querySelectorAll(
  '.section-heading, .project-card, .service-row, .about-visual, .about-copy, .contact-card'
);
revealTargets.forEach(element => {
  element.classList.add('reveal');
});
if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );
  revealTargets.forEach(element => {
    observer.observe(element);
  });
} else {
  revealTargets.forEach(element => {
    element.classList.add('visible');
  });
}
// IMPORTANT: Replace this with your real email before publishing.
const YOUR_EMAIL = 'hello@example.com';
const emailLink = document.querySelector('#email-link');
if (emailLink && YOUR_EMAIL !== 'hello@example.com') {
  emailLink.href = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(
    'Let’s work together'
  )}`;
}
