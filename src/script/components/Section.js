export default class Section {

  constructor({renderer}, selector){
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  rendererItem(items){
    items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item){
    const card = this._renderer(item);
    this._container.prepend(card);
  }

}