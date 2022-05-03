function hasInvalidInput (inputList) {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
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