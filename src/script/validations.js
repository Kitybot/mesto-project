function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
function toggleButtonState  (inputList,  buttonClass, settingsObject)  {
  if (hasInvalidInput(inputList)) {
    buttonClass.disable = true;
    buttonClass.classList.add(settingsObject.buttonSelector);
  } else {
    buttonClass.disabled = false;
    buttonClass.classList.remove(settingsObject.buttonSelector);
  }
};


function showInputError (formSelector, inputSelector, errorMessage,  settingsObject) {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.inputErrorClass);
};

function hideInputError (formSelector, inputSelector, settingsObject) {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settingsObject.inputErrorClass);
};
function isValidForm (formElement, inputElement, settingsObject) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formElement, inputElement, settingsObject);
  }
};

const setEventListeners = (formSelector, settingsObject) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(settingsObject.inputElement)
  );
  const buttonClass = formSelector.querySelector(
    settingsObject.buttonSelector
  );
  toggleButtonState(inputList, buttonClass, settingsObject);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function() {
      isValidForm(formElement, inputElement, settingsObject);
      toggleButtonState(inputList,  buttonClass, settingsObject);
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