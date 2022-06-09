export default class Card {

  constructor({selector, cardData, isLiked, clickLikeButton, deleteCard, showCard}) {
    this._newCard = document.querySelector(`#${selector}`).content.querySelector('.pipi').cloneNode(true);
    this._cardImage = this._newCard.querySelector('.pipi__image');
    this._cardLikeButton = this._newCard.querySelector('#like_pipi');
    this._cardLikeCount = this._newCard.querySelector('.pipi__count-like');
    this._cardButtonRemove = this._newCard.querySelector('.pipi__remove');
    this._cardTitle = this._newCard.querySelector('.pipi__title');
    this._isLiked = isLiked;
    this._cardData = cardData;    
    this._clickLikeButton = clickLikeButton;
    this._deleteCard = deleteCard;
    this._showCard = showCard;
  } 
  
  _setEventListener() {
    this._cardLikeButton.addEventListener('click', () => {
      this._clickLikeButton(this);
    });
    this._cardButtonRemove.addEventListener('click', () => {
      this._deleteCard(this);      
    });
    this._cardImage.addEventListener('click', () => {
      this._showCard(this._cardData);
    });
  }

  getRemoveButton() {
    return this._cardButtonRemove;
  }

  getCard() {
    return this._newCard;
  }

  getIsLiked() {
    return this._isLiked;
  }

  getCardId() {
    return this._cardData._id;
  }

  _schowNumberLikes() {
    this._cardLikeCount.textContent = this._cardData.likes.length;
  }


  _saveNewData(cardData) {
    this._cardData = cardData;
    this._isLiked = !this._isLiked;
  }

  changeLike(cardData) {
    this._saveNewData(cardData);
    this._schowNumberLikes();
    this._cardLikeButton.classList.toggle('pipi__button_live');
  }
  
  createCard() {
    this._cardTitle.textContent = this._cardData.name;
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._schowNumberLikes();
    if (this._isLiked) this._cardLikeButton.classList.add('pipi__button_live');
    this._setEventListener();
    return this._newCard;
  }
  
}
