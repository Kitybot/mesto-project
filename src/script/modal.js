import { addForm, profileProf, profileName, formInput, inputProfEditForm, inputLinkEditAvatar, cardsList, formButton, inputLinkAddForm, inputPlaceAddForm, popupAdd } from "./util";
import{ createCard } from './card'
import { updateUserProfile, addNewCard, updateUserAvatar } from "./api.js";
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',endEscape);
    document.addEventListener('mousedown', closeCardVisibel);

    popup.classList.add('popup_opened');
  }
 export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', endEscape);
    document.removeEventListener('mousedown',closeCardVisibel);

    popup.classList.remove('popup_opened');
}
function endEscape(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}
function renderLoading(isLoading) {
  formButton.forEach(function (button) {
    if (isLoading) {
      button.textContent = "Сохранение...";
    } else {
      button.textContent = "Сохранить";
    }
  });
}

export function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);
  closePopup(popupAdd);
  addNewCard({
    name: inputPlaceAddForm.value,
    link: inputLinkAddForm.value,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      console.log(data);
      const card = createCard(
        data.link,
        data.name,
        data.likes.length,
        data.owner._id,
        data.owner._id,
        data._id
      );
      cardsList.prepend(card);
      addForm.reset();
      evt.submitter.setAttribute("disabled", true);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false));
}

export function handleEditFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);
  updateUserProfile({
    name: formInput.value,
    about: inputProfEditForm.value,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileProf.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false));
  closePopup(popupEdit);
}

export function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);
  updateUserAvatar({
    avatar: inputLinkEditAvatar.value,
  })
    .then((data) => {
      imageProfileAvatar.setAttribute("src", data.avatar);
      closePopup(popupEditAvatar);
      inputLinkEditAvatar.value = "";
      evt.submitter.setAttribute("disabled", true);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false));
}
function closeCardVisibel(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}