import {formElement, formInput} from "./util";

const showInputError = (formElement, inputSelector, errorMessage,  settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.errorClass);
};

const hideInputError = (formElement, inputSelector, settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settingsObject.errorClass);
};
const isValidForm = (formElement,inputSelector, settingsObject) => {
  if (!inputSelector.validity.valid) {
    showInputError(
      formElement,
      inputSelector,
      inputSelector.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formElement, inputSelector, settingsObject);
  }
};

const setEventListeners = (formElement, settingsObject) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settingsObject.inputSelector)
  );
  const submitButton = formElement.querySelector(
    settingsObject.buttonSelector
  );

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      isValidForm(formElement, inputSelector, settingsObject);
      toggleButtonState(inputList,  buttonClass);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};

const toggleButtonState = (inputSelector,  buttonClass) => {
  if (hasInvalidInput(inputSelector)) {
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