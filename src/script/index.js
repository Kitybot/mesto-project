import '../pages/index.css';
import { enableValidation} from "./validations.js";
import { popupProfile,  editButton, addButton, profileInput, profInput, 
         profileform, nameProfile, profProfile, popupCard,validationSettings, 
         avatarForm, avatarInput, modalAvatar, avatarSaveform, profileAvatar, 
         profileSaveButtom, profilecontainet ,cardContainer, popupPic, 
         elementContainer, cardForm, pipiSaveButtom} from "./constants";
import {  openPopup, closePopup } from "./modal.js";
//import { addEventListener, createCard, addCard} from "./card.js";
import { disabledButtonSave, renderLoading} from "./utils";
import {editAvatarProfile, editInfoProfile, getInfoProfile, getInitialCards} from "./Api";
import Api from "./Api";
import Card from './card';
const popupImage = document.querySelector(".popup__image");
const popupHeading = document.querySelector(".popup__heading");
enableValidation(validationSettings);

let userId;

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
    'Content-Type': 'application/json'
  }
}); 

const card = new Card(
  {
    selector: 'pipi__template',

    clickLikeButton: (cardLikeButton, cardLikeCount, cardId) => {
      if (cardLikeButton.classList.contains('pipi__button_live')) {
        api.deleteLikeCard(cardId)
          .then(res => {
            cardLikeCount.textContent = res.likes.length;
            cardLikeButton.classList.remove('pipi__button_live');
          })
          .catch(err => console.log(err))
      } else {
        api.addLikeCard(cardId)
          .then(res => {
            cardLikeCount.textContent = res.likes.length;
            cardLikeButton.classList.add('pipi__button_live');
          })
          .catch(err => console.error(err))
      }
    },

    deleteCard: (cardId, cardElement) => {
      api.deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch(err => console.error(err));
    },

    showCard: (popupName, popupLink) => {
      popupHeading.textContent = popupName;
      popupImage.src = popupLink;
      popupImage.alt = popupName;
      openPopup(popupPic);
    }

  }
)

function addCard(container, cardElement)  {
  container.prepend(cardElement);
}  

cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, cardForm);
  const cardName = cardForm.name.value;
  const cardPic = cardForm.link.value;
  api.addNewCards(cardName, cardPic)
    .then((newCard) => {
      addCard(elementContainer, card.createCard(cardName, cardPic, newCard._id, false, 0));
      cardForm.reset();
      disabledButtonSave(pipiSaveButtom)
      closePopup(popupCard);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false, cardForm);
    });
});


Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    nameProfile.textContent = userData.name;
    profProfile.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    profileAvatar.alt = `Аватар ${userData.name}`;
    cards.forEach(oldCard => {
      const initialCards = card.createCard(oldCard.name, oldCard.link, oldCard._id, 
                                           oldCard.likes.some(item => item._id === userId), 
                                           oldCard.likes.length);
      const cardRemoveButton = initialCards.querySelector('.pipi__remove');
      if (oldCard.owner._id !== userId) {
        cardRemoveButton.remove();
      };
      addCard(cardContainer, initialCards);
    })
  })
  .catch(err => {console.error(err)});


 function handleSubmitProfileForm() {
  renderLoading(true, profileform);
  api.editInfoProfile(profileInput, profInput)
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
  api.editAvatarProfile(avatarLink)
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

