export const content = document.querySelector('.content');

export const popups = document.querySelectorAll(".popup");
export const popupProfile = document.querySelector('.popup__profile');
export const popupCard = document.querySelector('.popup__pipi');
export const popupPic = document.querySelector('.popup__picture');
export const modalAvatar = document.querySelector('.popup__avatar');
export const closeButtonPic = document.querySelector('#close_Pic');

export const nameProfile = document.getElementById('name');
export const profProfile = document.getElementById('about');
export const elementContainer = content.querySelector('.element__container');
export const cardTemplate = document.querySelector('#pipi__template').content;
export const cardForm = document.getElementById('add_card');
export const closeButtonCard = document.querySelector('#close_popupCard');
export const popupDeleteCard = document.querySelector("#popupDeleteCard");
export const deleteCardButton = document.querySelector("#deleteCardButton");
export const popupEdit = document.querySelector("#popupEdit");
export const popupAdd = document.querySelector("#popupAdd");
export const editForm = document.querySelector("#editForm");
export const addForm = document.querySelector("#addForm");
export const pipiSaveButtom = cardForm.querySelector('.button');
export const pipiLikeButtom = document.querySelector('#like_pipi');

export const closeButtonProfile = document.querySelector('#close_Profile');
export const profileform = document.getElementById('edit_profile');
export const profileName = document.querySelector(".profile__name");
export const profileInput = document.querySelector('.profile__title');
export const profInput = document.querySelector('.profile__subtitle');
export const editButton = content.querySelector('.profile__edit_type_button');
export const addButton = content.querySelector('.profile__add_type_button');
export const profilecontainet = document.querySelector('.profile__avatar-container')

export const avatarForm = document.getElementById('edit_avatar');
export const editAvatarButton = document.querySelector('.profile__button-save');
export const profileAvatar = document.querySelector('.profile__avatar');
export const avatarSaveform = document.querySelector('#avatar-button-save');
export const avatarInput = document.getElementById('link-avatar_pic');

export const URl = 'https://nomoreparties.co/v1/plus-cohort-9';
export const token = '171327d0-b72a-4b48-9571-ee232ef250b0';

export const picterCards = [
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

export const validationSettings = ({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  buttonSelector: ".popup__button",
  buttonClass: "popup__button_inactive",
  ErrorClass: "popup__item_type_error",
  inputErrorClass: "popup__item-error_active",
}); 