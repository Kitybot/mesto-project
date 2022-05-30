export default class Popup{
  constructor(popup){
    this._popup = popup;
  }
  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown',this._handleEscape);
  }
  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscape);
  }
  _handleEscape(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }
  setEventListeners(){ 
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup()
      }
      if (evt.target.classList.contains('popup__close')) {
        this.closePopup()
      }
    })
  }
}