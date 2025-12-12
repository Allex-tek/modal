import { open } from "./open.js";
import { closeModal } from "./close.js";

const btnOpenModal = document.querySelector(".btnOpenModal");
const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal-main');
const close = document.querySelector('.close');

open(btnOpenModal, modal, modalMain);
closeModal(close, modal, modalMain);