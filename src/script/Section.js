export default class Section {

  constructor({items, renderer}, selector){
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(selector);
  }

  rendererItem(){
    this._items.forEach(item => {
        this._renderer(item);
    });
  }

  addItem(item){
    this._container.prepend(item);
  }

}