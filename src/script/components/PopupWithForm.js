import Popup from "./Popup";

export default class PopupWithForm extends Popup {

  constructor(popup, submitForm) {
    super(popup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const inputValues = {};
    const formElements = Array.from(this._popupForm.elements);
    formElements.forEach(item => {
      if (item.name !== '') {
        inputValues[item.name] = item.value;
      }
    });
    return inputValues;
  }

  _handleSubmitProfileForm = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
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