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


export const getInfoProfile = () => {
  return fetch(`${URl}/users/me`, {
    headers: config.headers
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
    headers: config.headers
  })
  .then(checkResponse)
};

export const editAvatarProfile = (avatarLink) => {
  return fetch(`${URl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({
      avatar: avatarLink
    }),
    headers: config.headers
  })
  .then(checkResponse)
};

export const getInitialCards = () => {
  return fetch(`${URl}/cards`, {
    headers: config.headers
  })
  .then(checkResponse)
};

export const addNewCards = (name, link) => {
  return fetch(`${URl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      link: link
    }),
    headers: config.headers
  })
  .then(checkResponse)
};

export const deleteCard = (cardid) => {
  return fetch(`${URl}/cards/${cardid}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
};

export const addLikeCard = (cardid) => {
  return fetch(`${URl}/cards/likes/${cardid}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(checkResponse)
};

export const deleteLikeCard = (cardid) => {
  return fetch(`${URl}/cards/likes/${cardid}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
};