import { cardForm, cardTemplate, popupPic, cardImage, ElementContainer, closeButtonPic, popupCard } from "./util.js";
import { closePopup, openPopup } from "./modal.js";
const PicterCards = [
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
  export function createCard(name, link) {
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