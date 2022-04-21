
import { keys } from "./validations";
import { popupProfile, editButton, addButton, closeButtonProfile, profileInput, profInput } from "./util";
import { addEventListener , openPopup } from "./modal";
import { addEventListener } from "./card";
enableValidation();

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






