const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  menu.classList.toggle('is-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const previewFrames = document.querySelectorAll('.project-preview iframe');

if ('ResizeObserver' in window) {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach(({ target }) => {
      const frame = target.querySelector('iframe');
      if (!frame) return;

      const scale = target.clientWidth / 1440;
      frame.style.setProperty('--preview-scale', scale.toString());
    });
  });

  previewFrames.forEach((frame) => resizeObserver.observe(frame.parentElement));
}
