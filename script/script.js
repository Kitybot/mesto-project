const content = document.querySelector('.content');
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__pipi');
const popupPic = document.querySelector('.popup__picture');
const closeButtonPic = document.querySelector('#close_Pic');
const profileform = document.getElementById('edit_profile');
const nameProfile = document.getElementById('name');
const profProfile = document.getElementById('about');
const profileInput = document.querySelector('.profile__title');
const profInput = document.querySelector('.profile__subtitle');
const editButton = content.querySelector('.profile__edit_type_button');
const addButton = content.querySelector('.profile__add_type_button');
const closeButtonProfile = document.querySelector('#close_Profile');
const ElementContainer = content.querySelector('.element__container');
const cardTemplate = document.querySelector('#pipi__template').content;
const cardForm = document.getElementById('add_card');
const closeButtonCard = document.querySelector('#close_popupCard');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function valueForm() {
  nameProfile.value = profileInput.textContent;
  profProfile.value = profInput.textContent;
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileInput.textContent = nameProfile.value;
  profInput.textContent = profProfile.value;
  closePopup(popupProfile);
}

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.pipi').cloneNode(true);
  cardElement.querySelector('.pipi__title').textContent = name;
  cardElement.querySelector('.pipi__image').src = link;
  cardElement.querySelector('.pipi__image').alt = name;
  cardElement.querySelector('.pipi__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('pipi__button_live');
  });
  cardElement.querySelector('.pipi__remove').addEventListener('click', function () {
    const pipis = document.querySelector('.pipi');
    pipis.remove();
  });
  cardElement.querySelector('.pipi__image').addEventListener('click', function () {
    showCard(name, link);
    openPopup(PopupPic);
  });

  return cardElement;
}

function addCard(container, cardElement) {
  container.prepend(cardElement);
}
editButton.addEventListener('click', () => {
  valueForm();
  openPopup(popupProfile);
});
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));

profileform.addEventListener('sumbit', formSubmitHandler);
addButton.addEventListener('click', () => {
  openPopup(popupCard);
});
closeButtonCard.addEventListener('click', () => closePopup(popupCard));

cardForm.addEventListener('sumbit', function (evt) {
  evt.preventDefault();
  addCard(cardsContainer, createCard(cardForm.name.value, cardForm.link.value));
  cardForm.reset();
  closePopup(popupCard);
});

PicterCards.forEach(card => {
  addCard(ElementContainer, createCard(card.name, card.link));
});

const cardImage = document.querySelectorAll('.pipi__image');
function showCard(popupName, popupLink) {
  openPopup(popupPic);
  popupPic.querySelector('.popup__title').textContent = popupName;
  popupPic.querySelector('.popup__image').src = popupLink;
  popupPic.querySelector('.popup__image').alt = popupName;
}
closeButtonPic.addEventListener('click', () => closePopup(popupPic));