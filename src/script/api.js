export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
    'Content-Type': 'application/json',
  }
}
export const responseCheck = res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: code ${res.status}`) 
    }
  }

  export const editInfoProfile = (nameProfile, profProfile) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        name: nameProfile.value,
        about: profProfile.value
      }),
      headers: {
        authorization:'171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };
  
  export const editAvatarProfile = (avatarLink) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: avatarLink
      }),
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };
  export const getInfoProfile = () => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
    .then(responseCheck)
  };
  
  export const getInitialCards = () => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
    .then(responseCheck)
  };
  
  export const addNewCards = (name, link) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
      method: 'POST',
      body: JSON.stringify({
        name, link
      }),
      headers: {
        authorization:'171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };
  
  export const deleteCard = (cardid) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards/${cardid}', {
      method: 'DELETE',
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };
  
  export const addLikeCard = (cardid) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards/likes/${cardid}', {
      method: 'PUT',
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };
  
  export const deleteLikeCard = (cardid) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards/likes/${cardid}', {
      method: 'DELETE',
      headers: {
        authorization: '171327d0-b72a-4b48-9571-ee232ef250b0',
        'Content-Type': 'application/json'
      }
    })
  };