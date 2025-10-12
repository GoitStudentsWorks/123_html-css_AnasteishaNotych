// (() => {
//     const refs = {
//         // Додати атрибут data-modal-open на кнопку відкриття
//         openModalBtn: document.querySelector('[data-menu-open]'),
//         // Додати атрибут data-modal-close на кнопку закриття
//         closeModalBtn: document.querySelector('[data-menu-close]'),
//         // додати атрибут data-modal на бекдроп модалки
//         modal: document.querySelector('[data-menu]'),
//     };
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);

//     function toggleModal() {
//         /is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//         refs.modal.classList.toggle('is-open');
//         //  document.body.classList.toggle('no-scroll', refs.modal.classList.contains('is-open'));
//     }
// })();

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
})();
