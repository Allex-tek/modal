export const btnCloseModal = (close, modal, modalMain) => {
    close.addEventListener('click', () => {
        modal.classList.remove('is-open');
        modalMain.classList.remove('is-open');
    });
}