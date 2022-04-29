import { cardForm, cardTemplate, popupPic, cardImage, ElementContainer, closeButtonPic } from "./util.js";
import { closePopup, openPopup } from "./modal.js";
  function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.pipi').cloneNode(true);
  cardElement.querySelector('.pipi__title').textContent = name;
  cardElement.querySelector('.pipi__image').src = link;
  cardElement.querySelector('.pipi__image').alt = name;
  cardElement.querySelector('.pipi__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('pipi__button_live');
  });
  cardElement.querySelector('.pipi__remove').addEventListener('click', function () {
    const meme = document.querySelector('.pipi');
    meme.remove();
  });
  cardElement.querySelector('.pipi__image').addEventListener('click', function () {
    showCard(name, link);
    openPopup(popupPic);
  });

  return cardElement;
}
PicterCards.forEach(card => {
    addCard(ElementContainer, createCard(card.name, card.link));
  });

  cardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCard(ElementContainer, createCard(cardForm.name.value, cardForm.link.value));
    cardForm.reset();
    closePopup(popupCard);
  });
  
function addCard(container, cardElement) {
    container.prepend(cardElement);
}
function showCard(popupName, popupLink) {
    openPopup(popupPic);
    popupPic.querySelector('.popup__heading').textContent = popupName;
    popupPic.querySelector('.popup__image').src = popupLink;
    popupPic.querySelector('.popup__image').alt = popupName;
}
closeButtonPic.addEventListener('click', () => closePopup(popupPic));