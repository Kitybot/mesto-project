import {enableValidation } from "./util";
const showInputError = (formSelector, inputElement, errorMessage, settings) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.ErrorClass.substring(1));
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass.substring(1));
};

const hideInputError = (formSelector, inputElement, settings) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.ErrorClass.substring(1));
  errorElement.classList.remove(settings.errorClass.substring(1));
  errorElement.textContent = "";
};
const isValidForm = (formSelector, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formSelector, inputElement, settings);
  }
};

const setEventListeners = (formSelector, settings) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(settings.inputSelector)
  );
  const submitButton = formSelector.querySelector(
    settings.buttonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValidForm(formSelector, inputElement, settings);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.setAttribute("disabled", true);
  } else {
    submitButton.removeAttribute("disabled");
  }
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector, settings);
  });
};