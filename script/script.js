const content = document.querySelector('.content');
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupPic = document.querySelector('.popup__picture');
const closeButtonPic = document.querySelector('#close_Pic');
const profileform = document.getElementById('edit_profile');
const nameProfile = document.getElementById('name');
const profProfile = document.getElementById('about');
const profileInput = document.querySelector('.profile__title');
const profInput = document.querySelector('.profile__subtitle');
const editButton = content.querySelector('.profile__edit-button');
const addButton = content.querySelector('.profile__button_add');
const closeButtonProfile = document.querySelector('#close_Profile');
const cardsContainer = content.querySelector('.cards__container');
const cardTemplate = document.querySelector('#cards__template').content;
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
  closePopup(modalProfile);
}

function createCard(name, link) {
  const cardForm = cardTemplate.querySelector('.card').cloneNode(true);
  cardForm.querySelector('.card__title').textContent = name;
  cardForm.querySelector('.card__pic').src = link;
  cardForm.querySelector('.card__pic').alt = name;
  cardForm.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_state_active');
  });
  cardForm.querySelector('.card__remove').addEventListener('click', function () {
    const cards = document.querySelector('.card');
    cards.remove();
  });
  cardForm.querySelector('.card__pic').addEventListener('click', function () {
    showCard(name, link);
    openPopup(modalPic);
  });

  return cardForm;
}

function addCard(container, cardForm) {
  container.prepend(cardForm);
}
editButton.addEventListener('click', () => {
  valueForm();
  openPopup(popupProfile);
});
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));

profileform.addEventListener('click', formSubmitHandler);
addButton.addEventListener('click', () => {
  openPopup(popupCard);
});
closeButtonCard.addEventListener('click', () => closePopup(modalCard));

cardForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  addCard(cardsContainer, createCard(cardForm));
  cardForm.reset();
  closePopup(popupCard);
});

PicterCards.forEach(card => {
  addCard(card, createCard(card.name, card.link));
});

const cardImage = document.querySelectorAll('.card__pic');
function showCard(popupName) {
  openPopup(modalPic);
  modalPic.querySelector('.popup__title').textContent = popupName;
  modalPic.querySelector('.popup__image').src = popupLink;
  modalPic.querySelector('.popup__image').alt = popupName;
}
closeButtonPic.addEventListener('click', () => closePopup(modalPic));