export const open = (btnOpenModal, modal, modalMain) => {
    btnOpenModal.addEventListener('click', () => {
        modal.classList.add('is-open');
        modalMain.classList.add('is-open');
    });
}