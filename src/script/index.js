import '../pages/index.css';
import { popupProfile,  editButton, addButton, nameProfile, profProfile, popupCard, 
         validationSettings, modalAvatar, profileAvatar, profilecontainet, 
         popupPic } from "./utils/constants";
import Api from "./components/Api";
import Card from './components/Card';
import FormValidator from './components/FormValidator';
import Section from './components/Section';
import PopupWithImage from './components/PopupWithImage';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
    'Content-Type': 'application/json'
  }
}); 

const userProfile = new UserInfo({
  nameProfileSelector: nameProfile,
  profProfileSelector: profProfile,
  avatarSelector: profileAvatar
});

function getNewCard(cardData) {
  const card = new Card(
    {
      selector: 'pipi__template',
      cardData,
      isLiked: cardData.likes.some(item => item._id === userProfile.profile._id),
  
      clickLikeButton: (card) => {
        if (card.getIsLiked()) {
          api.deleteLikeCard(card.getCardId())
            .then(res => {
              card.changeLike(res);
            })
            .catch(err => console.log(err))
        } else {
          api.addLikeCard(card.getCardId())
            .then(res => {
              card.changeLike(res);
            })
            .catch(err => console.error(err))
        }
      },
  
      deleteCard: (card) => {
        api.deleteCard(card.getCardId())
          .then(() => {
            card.getCard().remove();
          })
          .catch(err => console.error(err));
      },
  
      showCard: ({name, link}) => {
        popupWithImage.openPopup(name, link);
      }
    }
  );
  return card;
}

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
const validatorsOfForm = {};
formList.forEach(item => {
  validatorsOfForm[item.getAttribute('name')] = new FormValidator (validationSettings, item);
  validatorsOfForm[item.getAttribute('name')].enableValidation();
})

const addCards = new Section (
  {
    renderer: (cardData) => {
      const card = getNewCard(cardData);
      const initialCard = card.createCard();
      if (cardData.owner._id !== userProfile.profile._id) {
        card.getRemoveButton().remove();
      };
      return initialCard;
    },
  },
  '.element__container'
);

const popupWithImage = new PopupWithImage(popupPic);
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm (
  popupProfile,
  function submitForm(inputValues) {
    popupProfileForm.renderLoading(true);
    api.editInfoProfile(inputValues)
    .then(res => {
      userProfile.getUserInfo(res);
      userProfile.setUserInfo();
      popupProfileForm.closePopup();
    })
    .catch(err => {console.error(err)})
    .finally(() => {
      popupProfileForm.renderLoading(false);
    });
  }
);
popupProfileForm.setEventListeners();

const popupAvatarForm = new PopupWithForm (
  modalAvatar,
  function submitForm(inputValues) {
    popupAvatarForm.renderLoading(true);
    api.editAvatarProfile(inputValues)
    .then(res => {
      userProfile.getUserInfo(res)
      userProfile.setAvatar();
      popupAvatarForm.closePopup();
    })
      .catch(err => {console.error(err)})
      .finally(() => {
        popupAvatarForm.renderLoading(false);
      });
  }
);
popupAvatarForm.setEventListeners();

const popupCardForm = new PopupWithForm(
  popupCard,
  function submitForm(inputValues) {
    popupCardForm.renderLoading(true);
    api.addNewCards(inputValues)
      .then((newCard) => {
        addCards.addItem(newCard);
        popupCardForm.closePopup();
      })
      .catch(err => console.error(err))
      .finally(() => {
        popupCardForm.renderLoading(false);
      });
  }
)
popupCardForm.setEventListeners();

Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userProfile.getUserInfo(userData)
    userProfile.setUserInfo();
    userProfile.setAvatar();
    addCards.rendererItem(cards);
  })
  .catch(err => {console.error(err)});

editButton.addEventListener('click', () => {
  popupProfileForm.setInputValues(userProfile.profile);
  validatorsOfForm["edit_profile"].resetValidation();  
  popupProfileForm.openPopup();
});

addButton.addEventListener('click', () => {
  validatorsOfForm["add_card"].resetValidation();
  popupCardForm.openPopup();
});

profilecontainet.addEventListener('click', () => {
  validatorsOfForm["edit_avatar"].resetValidation();
  popupAvatarForm.openPopup();
});
