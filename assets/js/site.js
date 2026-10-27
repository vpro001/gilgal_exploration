// Shared behaviour: mobile menu and header shadow on scroll.
(function () {
  const toggle = document.getElementById('menu-toggle');
  const panel = document.getElementById('mobile-menu');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
      toggle.querySelector('[data-icon="open"]').classList.toggle('hidden', !open);
      toggle.querySelector('[data-icon="close"]').classList.toggle('hidden', open);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.click();
        toggle.focus();
      }
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
