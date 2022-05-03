function hasInvalidInput (inputList) {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};
function toggleButtonState  (inputList,  submitButton, settingsObject)  {
  if (hasInvalidInput(inputList)) {
    submitButton.disable = true;
    submitButton.classList.add(settingsObject.buttonClass);
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove(settingsObject.buttonClass);
  }
};


function showInputError (formInput, inputSelector, errorMessage,  settingsObject) {
  const errorElement = formInput.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(settingsObject.ErrorClass);
  errorElement.classList.add(settingsObject.inputErrorClass);
  errorElement.textContent = errorMessage;
};

function hideInputError (formInput, inputSelector, settingsObject) {
  const errorElement = formInput.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(settingsObject.ErrorClass);
  errorElement.classList.remove(settingsObject.inputErrorClass);
  errorElement.textContent = '';
};
function isValidForm (formInput, inputSelector, settingsObject) {
  if (!inputSelector.validity.valid) {
    showInputError(
      formInput,
      inputSelector,
      inputSelector.validationMessage,
      settingsObject
    );
  } else {
    hideInputError(formInput, inputSelector, settingsObject);
  }
};

const setEventListeners = (formElement, settingsObject) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settingsObject.inputSelector)
  );
  const buttonClass = formElement.querySelector(
    settingsObject.buttonSelector
  );
  toggleButtonState(inputList, buttonClass, settingsObject);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function() {
      isValidForm(formElement, inputSelector, settingsObject);
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