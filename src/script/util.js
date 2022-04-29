export const content = document.querySelector('.content');
export const popupProfile = document.querySelector('.popup__profile');
export const popupCard = document.querySelector('.popup__pipi');
export const popupPic = document.querySelector('.popup__picture');
export const closeButtonPic = document.querySelector('#close_Pic');
export const profileform = document.getElementById('edit_profile');
export const nameProfile = document.getElementById('name');
export const profProfile = document.getElementById('about');
export const profileInput = document.querySelector('.profile__title');
export const profInput = document.querySelector('.profile__subtitle');
export const editButton = content.querySelector('.profile__edit_type_button');
export const addButton = content.querySelector('.profile__add_type_button');
export const closeButtonProfile = document.querySelector('#close_Profile');
export const ElementContainer = content.querySelector('.element__container');
export const cardTemplate = document.querySelector('#pipi__template').content;
export const cardForm = document.getElementById('add_card');
export const closeButtonCard = document.querySelector('#close_popupCard');
export const cardImage = document.querySelectorAll('.pipi__image');
export const imageProfileAvatar = document.querySelector(".profile__avatar");
export const editAvatarForm = document.querySelector("#editAvatarForm");
export const formInput = document.querySelector(".form__input");
export const popups = document.querySelectorAll(".popup");
export const popupDeleteCard = document.querySelector("#popupDeleteCard");
export const deleteCardButton = document.querySelector("#deleteCardButton");
export const formButton = document.querySelectorAll(".form__button");
export const popupEdit = document.querySelector("#popupEdit");
export const popupAdd = document.querySelector("#popupAdd");
export const popupEditAvatar = document.querySelector("#popupEditAvatar");
export const inputProfEditForm = document.querySelector("#inputProf");
export const inputFirstname = document.querySelectorAll("#inputFirstname");
export const editForm = document.querySelector("#editForm");
export const addForm = document.querySelector("#addForm");

export const PicterCards = [
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

export const enableValidationForm = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save",
  buttonClass: "popup__save_inactive",
  ErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
}; 