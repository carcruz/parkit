"use strict";

window.onload = function init() {
  // DOM elements
  const btn_registrar = document.querySelector("#btn-reservar");
  const input_nombre = document.querySelector("#txt-nombre");
  const input_fecha_entrada = document.querySelector("#date-fecha-entrada");
  const input_fecha_salida = document.querySelector("#date-fecha-salida");
  const input_email = document.querySelector("#txt-email");
  const input_telefono = document.querySelector("#txt-telefono");

  // validar radios
  const validarRadios = () => {
    const radios = document.querySelectorAll('[name="moneda"]');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) return false;
    }
    return true;
  };

  // validar chechbox
  const validarCheckbox = () => {
    const check = document.querySelector("#check-acepto");
    return !check.checked;
  };

  // validar requeridos
  const validarRequeridos = () => {
    let error = false;
    const requeridos = document.querySelectorAll("[required]");
    const sizeRequeridos = requeridos.length;
    for (let i = 0; i < sizeRequeridos; i++) {
      if (requeridos[i].value == "") {
        requeridos[i].classList.add("error");
        error = true;
      } else {
        requeridos[i].classList.remove("error");
      }
    }
    return error;
  };

  // validar fechas
  const validarFechas = () => {
    let error = false;
    const dateEntrada = new Date(input_fecha_entrada.value);
    const dateSalida = new Date(input_fecha_salida.value);
    const dateEntradaTime = dateEntrada.getTime();
    const dateSalidaTime = dateSalida.getTime();

    if (dateSalidaTime <= dateEntradaTime) {
      error = true;
      input_fecha_entrada.classList.add("error");
      input_fecha_salida.classList.add("error");
    }
    return error;
  };

  // validar nombre
  const validarNombre = () => {
    let error = false;
    const regex = /^[A-Za-z\s]+$/g;
    if (!regex.test(input_nombre.value)) {
      error = true;
    }
    return error;
  };

  // validar telefono
  const validarTelefono = () => {
    let error = false;
    const regex = /^[0-9]{4}[-]?[0-9]{4}$/g;
    if (!regex.test(input_telefono.value)) {
      error = true;
    }
    return error;
  };

  // validar email
  const validarEmail = () => {
    let error = false;
    const regex = /[@]{1}/g;
    if (!regex.test(input_email.value)) {
      error = true;
    }
    return error;
  };

  const getDatos = () => {
    const errorRequeridos = validarRequeridos();
    const errorRadio = validarRadios();
    const errorCheckbox = validarCheckbox();
    const errorFechas = validarFechas();
    const errorNombre = validarNombre();
    const errorTelefono = validarTelefono();
    const errorEmail = validarEmail();

    if (errorRequeridos) {
      Swal.fire({
        title: "Error!",
        text: "Debe completar los campos requeridos",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorFechas) {
      Swal.fire({
        title: "Error!",
        text:
          "Debe ingresar un rango de fechas correcto, la fecha de entrada debe ser menor a fecha de salida",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorRadio) {
      Swal.fire({
        title: "Error!",
        text: "Debe seleccionar una moneda",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorCheckbox) {
      Swal.fire({
        title: "Error!",
        text: "Debe aceptar los terminos y condiciones",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorNombre) {
      Swal.fire({
        title: "Error!",
        text: "El nombre debe contener solo letras y espacios",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorTelefono) {
      Swal.fire({
        title: "Error!",
        text: "El telefono debe tener formato XXXX-XXXX unicamente numeros",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (errorEmail) {
      Swal.fire({
        title: "Error!",
        text: "El emain debe tener al menos un @",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    }

    // Validacion general para aprovación
    if (
      !errorRequeridos &&
      !errorRadio &&
      !errorCheckbox &&
      !errorFechas &&
      !errorNombre &&
      !errorTelefono &&
      !errorEmail
    ) {
      Swal.fire({
        title: "Aprovado!",
        text: "Formulario completado correctamente",
        icon: "success",
        confirmButtonText: "Ok!",
      });
    }
  };

  btn_registrar.addEventListener("click", getDatos);
};
