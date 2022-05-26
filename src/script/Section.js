export default class Section{
    constructor({renderer, items}, selector){
        this._renderer = renderer;
        this._items = items;
        this._container = document.querySelector(selector);
    }
    addItem(item){
        this._container.append(item);
    }
    rendererItem(){
        this._items.forEach(item => 
        this._renderer(item))
    }
}