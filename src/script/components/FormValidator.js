export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._errors = {};
    this._inputList.forEach(input => {
      this._errors[input.name] = this._form.querySelector(`#${input.name}-error`)
    });
    this._buttonElement = this._form.querySelector(this._settings.buttonSelector);
  }

  disabledButtonSave() {
    this._buttonElement.classList.add(this._settings.buttonClass);
    this._buttonElement.setAttribute('disabled', 'true');
  }

  resetValidation() {
    this._inputList.forEach(input => {
      this._hideInputError(input, this._errors[input.name]);
    });
    this.disabledButtonSave();
  }

  _showInputError(inputSelector, errorElement)  {
    inputSelector.classList.add(this._settings.ErrorClass);
    errorElement.textContent = inputSelector.validationMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(inputSelector, errorElement)  {
    inputSelector.classList.remove(this._settings.ErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.inputErrorClass);
  }

  _checkInputValidity(inputSelector) {
    const errorElement = this._errors[inputSelector.name];
    if (!inputSelector.validity.valid) {
      this._showInputError(inputSelector, errorElement);
    } else {
      this._hideInputError(inputSelector, errorElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disabledButtonSave();
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._settings.buttonClass);
    }
  }
  
  _setEventListeners() {
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState();
      });
    });
  };
  
  enableValidation() {
    this._setEventListeners();
  }
}
