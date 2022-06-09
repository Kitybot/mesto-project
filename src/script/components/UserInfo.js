export default class UserInfo {

    constructor({nameProfileSelector, profProfileSelector, avatarSelector}) {
      this._nameProfileElement = document.querySelector(`.${nameProfileSelector}`);
      this._profProfileElement = document.querySelector(`.${profProfileSelector}`);
      this._profileAvatar = document.querySelector(avatarSelector);
      this.profile = {};
    }
  
    getUserInfo({name, about, avatar, _id}) {
      this.profile.name = name;
      this.profile.about = about;
      this.profile.avatar = avatar;
      this.profile._id = _id;
    }
  
    setUserInfo() {
      this._nameProfileElement.textContent = this.profile.name;
      this._profProfileElement.textContent = this.profile.about;
      this._profileAvatar.alt = `Аватар ${this.profile.name}`;
    }

    setAvatar() {
      this._profileAvatar.src = this.profile.avatar;  
    }
  }