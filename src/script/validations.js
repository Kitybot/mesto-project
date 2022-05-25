 export default class FormValidator{
   constructor(settings, form){
    this._settings = settings;
    this._form = form;
   }
    _showInputError  (inputSelector, errorMessage, settings, errorElement)  {
    //const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add(settings.ErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.inputErrorClass);
  }
  
    _hideInputError (inputSelector, settings, errorElement)  {
    //const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove(settings.ErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(settings.inputErrorClass);
  }

   _checkInputValidity (formSelector, inputSelector, settings)  {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    if (!inputSelector.validity.valid) {
      this._showInputError(inputSelector, inputSelector.validationMessage, 
                           settings, errorElement);
    } else {
      this._hideInputError(inputSelector, settings, errorElement);
    }
  }

    _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

    _toggleButtonState(inputList, buttonElement, settings) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(settings.buttonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(settings.buttonClass);
    }
  }

    _setEventListeners(formSelector, settings) {
    const inputList = Array.from(formSelector.querySelectorAll(settings.inputSelector));
    const buttonElement = formSelector.querySelector(settings.buttonSelector);
    this._toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('change', function () {
        this._checkInputValidity(formSelector, inputSelector, settings);
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };
  
  enableValidation() {
    this._setEventListeners(this._form, this._settings);
  }
  
 }

 /*const showInputError = (formSelector, inputSelector, errorMessage, settings) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add(settings.ErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputErrorClass);
};

 const hideInputError = (formSelector, inputSelector, settings) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(settings.ErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settings.inputErrorClass);
};

 const checkInputValidity = (formSelector, inputSelector, settings) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, settings);
  } else {
    hideInputError(formSelector, inputSelector, settings);
  }
};

 function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

 function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.buttonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.buttonClass);
  }
}

 function setEventListeners(formSelector, settings) {
  const inputList = Array.from(formSelector.querySelectorAll(settings.inputSelector));
  const buttonElement = formSelector.querySelector(settings.buttonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('change', function () {
      checkInputValidity(formSelector, inputSelector, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formSelector, settings);
  });
};*/