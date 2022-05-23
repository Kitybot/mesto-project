import { cardForm, cardTemplate, popupPic, elementContainer, pipiSaveButtom, popupCard} from "./constants";
import { closePopup, openPopup } from "./modal.js";
import { renderLoading, disabledButtonSave } from "./utils";
import { deleteCard, deleteLikeCard, addLikeCard, addNewCards } from "./Api";
const popupImage = document.querySelector(".popup__image");
const popupHeading = document.querySelector(".popup__heading");
import {api} from './index';
 
export default class Card {

  constructor({selector, clickLikeButton, deleteCard}) {
    this._selector = selector;
    this._clickLikeButton = clickLikeButton;
    this._deleteCard = deleteCard;
  } 
  
  _setEventListener(cardLikeButton, cardLikeCount, cardId, cardElement) {
    cardLikeButton.addEventListener('click', () => {
      this._clickLikeButton(cardLikeButton, cardLikeCount, cardId);
    });
    cardButtonRemove.addEventListener('click', () => {
      this._deleteCard(cardId, cardElement);      
    });
  }

  createCard(name, link, cardId, isLiked, likesCount) {
    const cardElement = document.querySelector(`.${this._selector}`).content.querySelector('.pipi').cloneNode(true);
    const cardImage = cardElement.querySelector('.pipi__image');
    const cardLikeButton = cardElement.querySelector('#like_pipi');
    const cardLikeCount = cardElement.querySelector('.pipi__count-like');
    const cardButtonRemove = cardElement.querySelector('.pipi__remove');
    cardElement.querySelector('.pipi__title').textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardLikeCount.textContent = likesCount;
    if (isLiked) cardLikeButton.classList.add('pipi__button_live');
    this._setEventListener(cardLikeButton, cardLikeCount, cardId, cardElement);

  }
}





/*export function createCard(name, link, cardId, isLiked, likesCount) {
const cardElement = cardTemplate.querySelector('.pipi').cloneNode(true);
const cardImage = cardElement.querySelector('.pipi__image');
const cardLikeButton = cardElement.querySelector('#like_pipi');
const cardLikeCount = cardElement.querySelector('.pipi__count-like');
const cardButtonRemove = cardElement.querySelector('.pipi__remove');
cardElement.querySelector('.pipi__title').textContent = name;
cardImage.src = link;
cardImage.alt = name;
cardLikeCount.textContent = likesCount;*/

/*if (isLiked) cardLikeButton.classList.add('pipi__button_live');
cardLikeButton.addEventListener('click', () => {
  clickLikeButton(cardLikeButton, cardLikeCount, cardId);
});

cardButtonRemove.addEventListener('click', () => {
  api.deleteCard(cardId)
  .then(responseCheckWithNoData => {
    cardElement.remove();
    console.log(responseCheckWithNoData);
  })
  .catch(err => console.error(err));
});*/

cardImage.addEventListener('click', function () {
  showCard(name, link);
  openPopup(popupPic);
});

return cardElement;
}

export function addCard(container, cardElement) {
  container.prepend(cardElement);
}

function showCard(popupName, popupLink) {
  openPopup(popupPic);
  popupHeading.textContent = popupName;
  popupImage.src = popupLink;
  popupImage.alt = popupName;
}

/*export function clickLikeButton(cardLikeButton, cardLikeCount, cardId) {
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
}*/
cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, cardForm);
  const cardName = cardForm.name.value;
  const cardPic = cardForm.link.value;
  api.addNewCards(cardName, cardPic)
    .then((card) => {
      addCard(elementContainer, createCard(cardName, cardPic, card._id, false, 0));
      cardForm.reset();
      disabledButtonSave(pipiSaveButtom)
      closePopup(popupCard);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false, cardForm);
    });
});

