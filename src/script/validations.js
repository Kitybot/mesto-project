import {formElement, formInput} from "./util";

const showInputError = (formElement, formInput, errorMessage,  settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  formInput.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.errorClass);
};

const hideInputError = (formElement, formInput, settingsObject) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settingsObject.errorClass);
};
const isValidForm = (formElement,formInput, settingsObject) => {
  if (!formInput.validity.valid) {
    showInputError(
      formElement,
      formInput,
      formInput.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formElement, formInput, settingsObject);
  }
};

const setEventListeners = (formElement, settingsObject) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settingsObject.inputSelector)
  );
  const submitButton = formElement.querySelector(
    settingsObject.buttonSelector
  );

  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValidForm(formElement, formInput, settingsObject);
      toggleButtonState(inputList,  buttonClass);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

const toggleButtonState = (inputList,  buttonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonClass.setAttribute("disabled", true);
  } else {
    buttonClass.removeAttribute("disabled");
  }
};

export const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settingsObject);
  });
};