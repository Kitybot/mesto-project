import { URl, token } from './constants';

export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

   getInitialCards  () {
    return fetch(`${this._baseUrl}/cards`, {
     headers: this._headers
    })
    .then(this._checkResponse)
  };
   getInfoProfile  ()  {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  };
     _checkResponse = res => {
    if (res.ok) {
      return res.json() 
    } else {
      return Promise.reject(`Ошибка: code ${res.status}`) 
    }
  }
    editInfoProfile = (nameProfile, profProfile) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: nameProfile.value,
        about: profProfile.value
      }),
      headers: this._headers
    })
    .then(this._checkResponse)
  };
  
}












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
