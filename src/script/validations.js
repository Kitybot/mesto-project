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

function setEventListeners (formInput, settingsObject) {
  const inputList = Array.from(
    formInput.querySelectorAll(settingsObject.inputSelector)
  );
  const buttonClass = formInput.querySelector(
    settingsObject.buttonSelector
  );
  toggleButtonState(inputList, buttonClass, settingsObject);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      isValidForm(formInput, inputSelector, settingsObject);
      toggleButtonState(inputList,  buttonClass, settingsObject);
    });
  });
};

export function enableValidation (settingsObject) {
  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
  formList.forEach((formInput) => {
    formInput.addEventListener("submit", (evt) =>  {
      evt.preventDefault();
    });
    setEventListeners(formInput, settingsObject);
  });
};