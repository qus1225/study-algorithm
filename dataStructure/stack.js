export class Stack {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  push(item) {
    this._items.push(item);
  }

  pop() {
    return this._items.pop();
  }

  peek() {
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length <= 0;
  }

  clear() {
    this._items = [];
  }

  size() {
    return this._items.length;
  }
}
