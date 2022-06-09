import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupName = this._popup.querySelector('.popup__heading');
    this._popupLink = this._popup.querySelector('.popup__image');
  }

  openPopup(name, link) {
    this._popupLink.src = link;
    this._popupName.alt = name;
    this._popupName.textContent = name;

    super.openPopup();
  }
}