
const showInputError = (formSelector, inputElement, errorMessage,  settingsObject) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.errorClass);
};

const hideInputError = (formSelector, inputElement, settingsObject) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settingsObject.errorClass);
};
const isValidForm = (formSelector, inputElement, settingsObject) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formSelector,
      inputElement,
      inputElement.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formSelector, inputElement, settingsObject);
  }
};

const setEventListeners = (formSelector, settingsObject) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(settingsObject.inputSelector)
  );
  const submitButton = formSelector.querySelector(
    settingsObject.buttonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValidForm(formSelector, inputElement, settingsObject);
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

export const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector, settingsObject);
  });
};