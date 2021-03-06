import '../pages/index.css';
import { enableValidation} from "./validations.js";
import { popupProfile, editButton, addButton, profileInput, profInput, profileform, nameProfile, profProfile, popupCard,validationSettings, avatarForm, avatarInput, modalAvatar, avatarSaveform, profileAvatar, profileSaveButtom, profilecontainet ,cardContainer} from "./constants";
import {  openPopup, closePopup } from "./modal.js";
import { addEventListener, createCard, addCard} from "./card.js";
import { disabledButtonSave, renderLoading } from "./utils";
import {editAvatarProfile, editInfoProfile, getInfoProfile, getInitialCards} from "./api"
enableValidation(validationSettings);

let userId;

Promise.all([getInfoProfile(), getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    nameProfile.textContent = userData.name;
    profProfile.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    profileAvatar.alt = `Аватар ${userData.name}`;
    cards.forEach(card => {
      const initialCards = createCard(card.name, card.link, card._id, card.likes.some(item => item._id === userId), card.likes.length);
      const cardRemoveButton = initialCards.querySelector('.pipi__remove');
      if (card.owner._id !== userId) {
        cardRemoveButton.remove();
      };
      addCard(cardContainer, initialCards);
    })
  })
  .catch(err => {console.error(err)});


 function handleSubmitProfileForm() {
  renderLoading(true, profileform);
  editInfoProfile(profileInput, profInput)
    .then(res => {
      nameProfile.textContent = res.name;
      profProfile.textContent = res.about;
      disabledButtonSave(profileSaveButtom);
      closePopup(popupProfile);
    })
    .catch(err => {console.error(err)})
    .finally(() => {
      renderLoading(false, profileform);
    });
}
 function editAvatarPic() {
  const avatarLink = avatarInput.value;
  renderLoading(true, avatarForm);
  editAvatarProfile(avatarLink)
  .then(res => {
    profileAvatar.src = res.avatar;
    disabledButtonSave(avatarSaveform);
    avatarForm.reset();
    closePopup(modalAvatar);
  })
    .catch(err => {console.error(err)})
    .finally(() => {
      renderLoading(false, avatarForm);
    });
};

function fillProfileInputs() {
  profileInput.value = nameProfile.textContent;
  profInput.value = profProfile.textContent;
}

editButton.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(popupProfile);
});

profileform.addEventListener('submit', handleSubmitProfileForm);
addButton.addEventListener('click', () => {
  openPopup(popupCard);
});

profilecontainet.addEventListener('click', () => {
  openPopup(modalAvatar);
});

avatarForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  editAvatarPic();
});

