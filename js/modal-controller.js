"use strict";

// HELPERS
// init a modal
function initModal(modal, btnActive, btnClose) {
  btnActive.onclick = function () {
    modal.classList.add("active");
  };

  btnClose.onclick = function () {
    modal.classList.remove("active");
  }
}

// clear window modal
window.onclick = function (event) {
  if (event.target == modal_login) {
    modal_login.classList.remove("active");
  }
};

// MODAL LOGIN
const modal_login = document.querySelector("#modal-login");
const btn_login = document.querySelector("#btn-login");
const btn_close_login = document.querySelector("#close-modal-login");
initModal(modal_login, btn_login, btn_close_login);