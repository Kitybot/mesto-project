import { cardForm, cardTemplate, popupPic, elementContainer, pipiSaveButtom, popupCard} from "./constants";
import { closePopup, openPopup } from "./modal.js";
import { renderCardLoading, disabledButtonSave } from "./utils";
import { deleteCard, deleteLikeCard, addLikeCard, addNewCards } from "./api";
const popupImage = document.querySelector(".popup__image");
const popupHeading = document.querySelector(".popup__heading");
const picterCards = [
  {
    name: 'Сахалин',
    link: 'https://putpostrane.ru/wp-content/uploads/2021/07/2021-07-09_16-08-54.png'
  },
  {
    name: 'Гора Арарат',
    link: 'https://kartinkin.net/uploads/posts/2021-03/1616076134_13-p-ararat-krasivie-foto-14.jpg'
  },
  {
    name: 'Сочи',
    link: 'https://fb.ru/media/i/1/7/8/9/4/1/9/i/1789419.jpg'
  },
  {
    name: 'Алтай',
    link: 'https://city-sochi.ru/wp-content/uploads/2019/04/4-30.jpg'
  },
  {
    name: 'Катунский хребет',
    link: 'https://news.ykt.ru/upload/image/2014/04/19772/4545155-R3L8T8D-1000-131530750946.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://avatars.mds.yandex.net/get-zen_doc/3323369/pub_5f319fe690fc736b4109d4d0_5f31a7a2be8c144e5df29dd3/scale_1200'
  },
];
export function createCard(name, link, cardId, isLiked, likesCount) {
const cardElement = cardTemplate.querySelector('.pipi').cloneNode(true);
const cardImage = cardElement.querySelector('.pipi__image');
const cardLikeButton = cardElement.querySelector('#like_pipi');
const cardLikeCount = cardElement.querySelector('.pipi__count-like');
const cardButtonRemove = cardElement.querySelector('.pipi__remove');
cardElement.querySelector('.pipi__title').textContent = name;
cardImage.src = link;
cardImage.alt = name;
cardLikeCount.textContent = likesCount;

if (isLiked) cardLikeButton.classList.add('pipi__button_live');
cardLikeButton.addEventListener('click', () => {
  clickLikeButton(cardLikeButton, cardLikeCount, cardId);
});

cardButtonRemove.addEventListener('click', () => {
  deleteCard(cardId)
  .then(responseCheckWithNoData => {
    cardElement.remove();
    console.log(responseCheckWithNoData);
  })
  .catch(err => console.error(err));
});

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

export function clickLikeButton(cardLikeButton, cardLikeCount, cardId) {
  if (cardLikeButton.classList.contains('pipi__button_live')) {
    deleteLikeCard(cardId)
    .then(res => {
      cardLikeCount.textContent = res.likes.length;
      cardLikeButton.classList.remove('pipi__button_live');
    })
    .catch(err => console.log(err))
  } else {
    addLikeCard(cardId)
    .then(res => {
      cardLikeCount.textContent = res.likes.length;
      cardLikeButton.classList.add('pipi__button_live');
    })
    .catch(err => console.error(err))
  }
}
cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderCardLoading(true, cardForm);
  const cardName = cardForm.name.value;
  const cardPic = cardForm.link.value;
  addNewCards(cardName, cardPic)
    .then((card) => {
      addCard(elementContainer, createCard(cardName, cardPic, card._id, false, 0));
      cardForm.reset();
      disabledButtonSave(pipiSaveButtom)
      closePopup(popupCard);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderCardLoading(false, cardForm);
    });
});

