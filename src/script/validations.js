const isValidForm = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.formInput)
  );
  const submitButton = formElement.querySelector(
    settings.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValidForm(formElement, inputElement, settings);
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
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.errorClass.substring(1));
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputErrorClass.substring(1));
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.errorClass.substring(1));
  errorElement.classList.remove(settings.inputErrorClass.substring(1));
  errorElement.textContent = "";
};



export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};