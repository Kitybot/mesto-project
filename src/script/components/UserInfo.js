export default class UserInfo {

    constructor({nameProfileSelector, profProfileSelector}) {
      this._nameProfileElement = document.querySelector(`.${nameProfileSelector}`);
      this._profProfileElement = document.querySelector(`.${profProfileSelector}`);
      this.profile = {};
    }
  
    getUserInfo({name, about}) {
      this.profile.name = name;
      this.profile.prof = about;
    }
  
    setUserInfo() {
      this._nameProfileElement.textContent = this.profile.name;
      this._profProfileElement.textContent = this.profile.prof;
    }
  }