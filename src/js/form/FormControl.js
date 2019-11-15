import Form from "./Form";

class FormControl {
  constructor() {
    this.checkFormForErrors();
  }

  checkFormForErrors() {
    const inputsWithError = document.querySelectorAll("[data-required=true]");
    const formSuccess = document.getElementById("formSuccess");

    for (let i = 0; i < inputsWithError.length; i += 1) {
      const inputId = inputsWithError[i].id;

      const inputErrorDom = document.querySelector(
        `[data-form-error=${inputId}]`
      );

      if (!inputsWithError[i].value) {
        inputErrorDom.innerHTML = "*Required";
        inputsWithError[i].classList.add("form__input--error");
      }
    }

    if (inputsWithError.length === 0) {
      formSuccess.classList.add("form__success--show");
      formSuccess.classList.remove("form__success--hide");
    }
  }
}

export default FormControl;
