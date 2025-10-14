(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    btn: document.querySelector('.header-button'),
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) return;

  refs.openBtn.addEventListener('click', toggle);
  refs.closeBtn.addEventListener('click', toggle);

  function toggle() {
    const open = refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll', open);
    // refs.btn?.classList.toggle('is-open', open);
  }
  refs.menu.addEventListener('click', e => {
    if (e.target.closest('a')) {
      refs.menu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
})();
