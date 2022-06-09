import Popup from "./Popup";

export default class PopupWithForm extends Popup {

  constructor(popup, submitForm) {
    super(popup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formElements = Array.from(this._popupForm.querySelectorAll('.popup__item'));
    this._formButton = this._popupForm.querySelector('.button');
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const inputValues = {};
    this._formElements.forEach(item => {        
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }

  setInputValues(data) {
    this._formElements.forEach(item => {
      item.value = data[item.name];
    })
  }

  _handleSubmitProfileForm = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formButton.textContent = 'Сохраняем...';
    } else {
      this._formButton.textContent = 'Сохранить';
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleSubmitProfileForm);
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}