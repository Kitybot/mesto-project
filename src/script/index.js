import '../pages/index.css';
import { enableValidation} from "./validations.js";
import { popupProfile, editButton, addButton, profileInput, profInput, profileform, nameProfile, profProfile, popupCard,validationSettings, avatarForm, avatarInput, modalAvatar, avatarSaveform, profileAvatar, editAvatarButton} from "./constants";
import {  openPopup, closePopup } from "./modal.js";
import { addEventListener } from "./card.js";
import { disabledButtonSave } from "./utils";
enableValidation(validationSettings);


function fillProfileInputs() {
  nameProfile.value = profileInput.textContent;
  profProfile.value = profInput.textContent;
}
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileInput.textContent = nameProfile.value;
  profInput.textContent = profProfile.value;
  closePopup(popupProfile);
}

editButton.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(popupProfile);
});

profileform.addEventListener('submit', handleSubmitProfileForm);
addButton.addEventListener('click', () => {
  openPopup(popupCard);
});

editAvatarButton.addEventListener('click', () => {
  openPopup(modalAvatar);
});

