export class Queue {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  enqueue(item) {
    this._items.push(item);
  }

  dequeue() {
    return this._items.shift();
  }

  front() {
    return this._items[0];
  }

  isEmpty() {
    return this._items.length <= 0;
  }

  size() {
    return this._items.length;
  }
}
