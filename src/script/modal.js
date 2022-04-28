import { profileInput ,  profInput,   profileform , popupProfile } from "./util.js";
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.removeEventListener('keydown',endEscape);
  }
 export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', endEscape);
}
function endEscape(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}