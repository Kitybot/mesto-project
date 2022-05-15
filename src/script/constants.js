export const content = document.querySelector('.content');

export const popups = document.querySelectorAll(".popup");
export const popupProfile = document.querySelector('.popup__profile');
export const popupCard = document.querySelector('.popup__pipi');
export const popupPic = document.querySelector('.popup__picture');
export const modalAvatar = document.querySelector('.popup__avatar');
export const closeButtonPic = document.querySelector('#close_Pic');

export const nameProfile = document.querySelector('.profile__title');
export const profProfile = document.querySelector('.profile__subtitle');


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


export const closeButtonProfile = document.querySelector('#close_Profile');
export const profileform = document.getElementById('edit_profile');
export const profileName = document.querySelector(".profile__name");



export const profileInput = document.getElementById('name');
export const profInput = document.getElementById('about');


export const editButton = content.querySelector('.profile__edit_type_button');
export const addButton = content.querySelector('.profile__add_type_button');
export const profilecontainet = document.querySelector('.profile__avatar-container')
export const profileSaveButtom = profileform.querySelector('.profile-button-save');


export const avatarForm = document.getElementById('edit_avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const avatarSaveform = avatarForm.querySelector('.button-save-avatar');
export const avatarInput = document.getElementById('link-avatar_pic');

export const cardContainer = document.querySelector('.element__container')
export const URl = 'https://nomoreparties.co/v1/plus-cohort-9';
export const token = '171327d0-b72a-4b48-9571-ee232ef250b0';

export const validationSettings = ({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  buttonSelector: ".popup__button",
  buttonClass: "popup__button_inactive",
  ErrorClass: "popup__item_type_error",
  inputErrorClass: "popup__item-error_active",
}); 