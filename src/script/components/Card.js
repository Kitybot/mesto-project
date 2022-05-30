export default class Card {

  constructor({selector, clickLikeButton, deleteCard, showCard}) {
    this._selector = selector;
    this._clickLikeButton = clickLikeButton;
    this._deleteCard = deleteCard;
    this._showCard = showCard;
  } 
  
  _setEventListener(cardLikeButton, cardLikeCount, cardId, cardElement, cardButtonRemove, 
                    cardImage, name, link) {
    cardLikeButton.addEventListener('click', () => {
      this._clickLikeButton(cardLikeButton, cardLikeCount, cardId);
    });
    cardButtonRemove.addEventListener('click', () => {
      this._deleteCard(cardId, cardElement);      
    });
    cardImage.addEventListener('click', () => {
      this._showCard(name, link);
    });
  }

  createCard(name, link, cardId, isLiked, likesCount) {
    const cardElement = document.querySelector(`#${this._selector}`).content.querySelector('.pipi').cloneNode(true);
    const cardImage = cardElement.querySelector('.pipi__image');
    const cardLikeButton = cardElement.querySelector('#like_pipi');
    const cardLikeCount = cardElement.querySelector('.pipi__count-like');
    const cardButtonRemove = cardElement.querySelector('.pipi__remove');
    cardElement.querySelector('.pipi__title').textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardLikeCount.textContent = likesCount;
    if (isLiked) cardLikeButton.classList.add('pipi__button_live');
    this._setEventListener(cardLikeButton, cardLikeCount, cardId, cardElement, 
                           cardButtonRemove, cardImage, name, link);
    return cardElement;
  }
  
}
