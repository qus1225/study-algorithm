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

class PriorityQueueItem {
  constructor(element, priority) {
    this._element = element;
    this._priority = priority;
  }

  get element() {
    return this._element;
  }

  get priority() {
    return this._priority;
  }
}

export class PriorityQueue extends Queue {
  enqueue(element, priority) {
    // 숫자가 작을 수록 높은 우선순위
    const item = new PriorityQueueItem(element, priority);

    if (this._items.length <= 0) {
      this._items.push(item);
    } else {
      const itemToBeat = this._items.find((val, index) => {
        return val.priority > item.priority;
      });

      if (itemToBeat) {
        const index = this._items.indexOf(itemToBeat);
        const head = index === 0 ? [] : this._items.slice(0, index - 1);
        const tail = this._items.slice(index);
        this._items = [...head, item, ...tail];
      } else {
        this._items.push(item);
      }
    }
  }

  front() {
    return this._items[0] ? this._items[0].element : null;
  }

  dequeue() {
    const result = this._items.shift();

    return result ? result.element : null;
  }
}
