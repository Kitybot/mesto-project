import '../pages/index.css';
import { enableValidation} from "./validations.js";
import { popupProfile, editButton, addButton, closeButtonProfile, profileInput, profInput, profileform, closeButtonCard, nameProfile, profProfile, popupCard,validationSettingObject } from "./util.js";
import {  openPopup, closePopup } from "./modal.js";
import { addEventListener } from "./card.js";
enableValidation(validationSettingObject);

function valueForm() {
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
  valueForm();
  openPopup(popupProfile);
});
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));

profileform.addEventListener('submit', handleSubmitProfileForm);
addButton.addEventListener('click', () => {
  openPopup(popupCard);
});
closeButtonCard.addEventListener('click', () => closePopup(popupCard));


