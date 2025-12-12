export const modalClose = (modalMain, modal) => {
    const close = (event) => {
        if (modal.contains(event.target)) return;
        modalMain.classList.remove('is-open');
        modal.classList.remove('is-open');
    }
    modalMain.addEventListener('click', close);
}