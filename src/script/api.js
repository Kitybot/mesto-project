import { URl, token } from './constants';

export const config = {
  baseUrl: `${URl}`,
  headers: {
    authorization: `${token}`,
    'Content-Type': 'application/json'
  }
};

export const checkResponse = res => {
  if (res.ok) {
    return res.json() 
  } else {
    return Promise.reject(`Ошибка: code ${res.status}`) 
  }
}

export const checkResponseWithNoData = res => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: code ${res.status}`) 
  }
}

export const getInfoProfile = () => {
  return fetch(`${URl}/users/me`, {
  })
  .then(checkResponse)
};

export const editInfoProfile = (nameProfile, profProfile) => {
  return fetch(`${URl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: nameProfile.value,
      about: profProfile.value
    }),
  })
  .then(checkResponse)
};

export const editAvatarProfile = (avatarLink) => {
  return fetch(`${URl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({
      avatar: avatarLink
    }),
  })
  .then(checkResponse)
};

export const getInitialCards = () => {
  return fetch(`${URl}/cards`, {
  })
  .then(checkResponse)
};

export const addNewCards = (name, link) => {
  return fetch(`${URl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name, link
    }),
  })
  .then(checkResponse)
};

export const deleteCard = (cardid) => {
  return fetch(`${URl}/cards/${cardid}`, {
    method: 'DELETE',
  })
  .then(checkResponse)
};

export const addLikeCard = (cardid) => {
  return fetch(`${URl}/cards/likes/${cardid}`, {
    method: 'PUT',
  })
  .then(checkResponse)
};

export const deleteLikeCard = (cardid) => {
  return fetch(`${URl}/cards/likes/${cardid}`, {
    method: 'DELETE',
  })
  .then(checkResponse)
};