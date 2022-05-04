const showInputError =  (formSelector, inputSelector, errorMessage,  settingsObject) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(settingsObject.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsObject.inputErrorClass);
};

const hideInputError =  (formSelector,  inputSelector, settingsObject) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(settingsObject.ErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settingsObject.inputErrorClass);
};
const isValidForm =  (formSelector, inputSelector, settingsObject) => {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,inputSelector,inputSelector.validationMessage,settingsObject);
  } else {
    hideInputError(formSelector, inputSelector, settingsObject);
  }
};
function hasInvalidInput (inputList)  {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};
function toggleButtonState (inputList,  buttonElement, settingsObject)   {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settingsObject.buttonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settingsObject.buttonClass);
  }
}

function setEventListeners (formSelector, settingsObject)  {
  const inputList = Array.from(formSelector.querySelectorAll(settingsObject.inputSelector));
  const buttonElement = formSelector.querySelector(settingsObject.buttonSelector);
  toggleButtonState(inputList, buttonElement, settingsObject);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function() {
      isValidForm(formSelector, inputSelector, settingsObject);
      toggleButtonState(inputList,  buttonElement, settingsObject);
    });
  });
};

export function enableValidation (settingsObject)  {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", function(evt)  {
      evt.preventDefault();
    });
    setEventListeners(formSelector, settingsObject);
  });
};