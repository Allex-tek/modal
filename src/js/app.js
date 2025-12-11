import { open } from "./open.js";

const btnOpenModal = document.querySelector(".btnOpenModal");
const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal-main');

open(btnOpenModal, modal, modalMain);