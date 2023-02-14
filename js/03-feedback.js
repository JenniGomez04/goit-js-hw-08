import throttle from 'lodash.throttle'

const sendForm = document.querySelector(".feedback-form")
const textMail = document.querySelector('[name="email"]');
const textmessage = document.querySelector('[name="message"]');


sendForm.addEventListener(`submit`, saveMessage)

function saveMessage(event) {
    event.preventDefault();

    const objInfo = {
        email :  textMail.value,
        message : textmessage.value,
    };

    if (textMail.value === "" || textmessage.value === "") {
        alert("Todos los espacios deben estar rellenados!");
        return
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(objInfo));
    sendForm.reset();
};



//--------------- Posible Respuesta 2 (Revision)--------------------------------------
/*
//CONSULTA DE LOS CAMPOS DEL FORMULARIO DENTRO DE UN OBJETO

const queryHtml = {
  formu: document.querySelector('.feedback-form'),
  inputMail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea')
}

const {
  formu,
  inputMail,
  textareaMessage,
} = queryHtml;

const infoLocal = {};

function SaveLocalhost() {
  const formularioJSON = JSON.stringify(infoLocal);
  localStorage.setItem("feedback-form-state", formularioJSON);
}

const InputMail = function(event) {
  infoLocal.Email = event.target.value;
  saveLocalhost();
}

const TextareaMessage = function(event) {
  infoLocal.Message = event.target.value;
  saveLocalhost();
}



// CREACIÓN OBJ VACIO
// SE SITUA EN EL INPUT LLAMA AL EVENT TARGET CAPTURA EL VALOR EN CADA CAMPO
// Y LO GUARDA EN CADA FUNCION SEGUN SU CAMPO Y SE GUARDA EN EL LOCAL

*/
