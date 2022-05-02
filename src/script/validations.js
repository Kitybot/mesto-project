

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
const isValidForm = (formElement, inputSelector, settingsObject) => {
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
    inputSelector.addEventListener("change", () => {
      isValidForm(formElement, inputSelector, settingsObject);
      toggleButtonState(inputList,  buttonClass, settingsObject);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};

const toggleButtonState = (inputList,  submitButton, settingsObject) => {
  if (hasInvalidInput(inputList)) {
    submitButton.disable = true;
    submitButton.classList.add(settingsObject.buttonClass);
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove(settingsObject.buttonClass);
  }
};

export const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt)  {
      evt.preventDefault();
    });
    setEventListeners(formElement, settingsObject);
  });
};