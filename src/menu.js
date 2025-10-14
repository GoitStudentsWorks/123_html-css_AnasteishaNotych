(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) return;

  refs.openBtn.addEventListener('click', toggle);
  refs.closeBtn.addEventListener('click', toggle);

  function toggle() {
    const open = refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll', open);

    refs.openBtn.setAttribute('aria-expanded', open);
    refs.openBtn.setAttribute(
      'aria-label',
      open ? 'Закрити меню' : 'Відкрити меню'
    );
  }

  refs.menu.addEventListener('click', e => {
    if (e.target.closest('a')) {
      refs.menu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
      refs.openBtn.setAttribute('aria-expanded', false);
      refs.openBtn.setAttribute('aria-label', 'Відкрити меню');
    }
  });
})();
