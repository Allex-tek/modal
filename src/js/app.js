import { btnOpen } from "./open.js";
import { btnCloseModal } from "./close.js";
import { modalClose } from "./modalClose.js";

const btnOpenModal = document.querySelector(".btnOpenModal");
const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal-main');
const close = document.querySelector('.close');

btnOpen(btnOpenModal, modal, modalMain);
btnCloseModal(close, modal, modalMain);
modalClose(modalMain, modal);