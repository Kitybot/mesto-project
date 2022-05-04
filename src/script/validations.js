const showInputError =  (formElement, inputElement, errorMessage,  settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.inputErrorClass);
};

const hideInputError =  (formElement, inputElement, settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settingsObject.inputErrorClass);
};
const isValidForm =  (formElement, inputElement, settingsObject) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formSelector, inputSelector, settingsObject);
  }
};

function hasInvalidInput (inputList) {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};
function toggleButtonState  (inputList,  buttonElement, settingsObject)  {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settingsObject.buttonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settingsObject.buttonClass);
  }
}

const setEventListeners = (formSelector, settingsObject) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(settingsObject.inputElement)
  );
  const buttonElement = formSelector.querySelector(
    settingsObject.buttonSelector
  );
  toggleButtonState(inputList, buttonElement, settingsObject);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function() {
      isValidForm(formElement, inputElement, settingsObject);
      toggleButtonState(inputList,  buttonElement, settingsObject);
    });
  });
};

export const enableValidation = (settingsObject) => {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function(evt)  {
      evt.preventDefault();
    });
    setEventListeners(formElement, settingsObject);
  });
};