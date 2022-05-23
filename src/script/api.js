
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

  editInfoProfile (nameProfile, profProfile) {
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
  
  editAvatarProfile (avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: avatarLink
      }),
      headers: this._headers
    })
    .then(this._checkResponse)
  };

  addNewCards (name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      }),
      headers: this._headers
    })
    .then(this._checkResponse)
  };

  deleteCard (cardid) {
    return fetch(`${this._baseUrl}/cards/${cardid}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  };

  addLikeCard (cardid) {
    return fetch(`${this._baseUrl}/cards/likes/${cardid}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse)
  };

  deleteLikeCard (cardid) {
    return fetch(`${this._baseUrl}/cards/likes/${cardid}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  };
}



















export const deleteLikeCard = (cardid) => {
  return fetch(`${URl}/cards/likes/${cardid}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
};
