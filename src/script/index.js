import '../pages/index.css';
import { popupProfile,  editButton, addButton, profileInput, profInput, 
         profileform, nameProfile, profProfile, popupCard, validationSettings, 
         avatarForm, avatarInput, modalAvatar, avatarSaveform, profileAvatar, 
         profileSaveButtom, profilecontainet ,cardContainer, popupPic, 
         elementContainer, cardForm, pipiSaveButtom} from "./constants";
import {  openPopup, closePopup } from "./modal.js";
import { disabledButtonSave, renderLoading} from "./utils";
import Api from "./Api";
import Card from './Card';
import FormValidator from './FormValidator';
import Section from './Section';
const popupImage = document.querySelector(".popup__image");
const popupHeading = document.querySelector(".popup__heading");

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

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
const avatrFormValidator  = new FormValidator (validationSettings, formList[0]);
avatrFormValidator.enableValidation();
const profileFormValidator = new FormValidator (validationSettings, formList[1]);
profileFormValidator.enableValidation();
const cardValidator = new FormValidator (validationSettings, formList[2]);
cardValidator.enableValidation();

const addCards = new Section (
  {
    renderer: (cardData) => {
      const initialCard = card.createCard(cardData.name, cardData.link, cardData._id, 
                                           cardData.likes.some(item => item._id === userId), 
                                           cardData.likes.length);
      const cardRemoveButton = initialCard.querySelector('.pipi__remove');
      if (cardData.owner._id !== userId) {
      cardRemoveButton.remove();
      };
      addCards.addItem(initialCard);
    },
  },
  '.element__container'
);

cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, cardForm);
  const cardName = cardForm.name.value;
  const cardPic = cardForm.link.value;
  
  api.addNewCards(cardName, cardPic)
    .then((newCard) => {
      const initialCard = card.createCard(newCard.name, newCard.link, newCard._id, 
                                          false, newCard.likes.length);
      addCards.addItem(initialCard);
      cardForm.reset();
      disabledButtonSave(pipiSaveButtom)
      closePopup(popupCard);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false, cardForm);
    });
});

formList.forEach((formSelector) => {
      formSelector.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    })


Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    nameProfile.textContent = userData.name;
    profProfile.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    profileAvatar.alt = `Аватар ${userData.name}`;
    addCards.rendererItem(cards);
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

