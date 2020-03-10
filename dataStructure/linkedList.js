class LinkedListNode {
  constructor(element) {
    this._element = element;
    this._next = null;
  }

  get element() {
    return this._element;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
  }

  toString() {
    return `element: ${this.element} / next: ${this.next && this.next.element}`;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  get head() {
    return this._head;
  }

  set head(node) {
    this._head = node;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    this._length = val;
  }

  append(element) {
    const node = new LinkedListNode(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      let last = current;
      last.next = node;
    }
    this.length++;
  }

  insert(position, element) {
    if (
      typeof position !== "number" ||
      position < 0 ||
      position > this.length - 1
    ) {
      return false;
    }

    const node = new LinkedListNode(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const previous = this._findPreviousByPosition(position);

      node.next = previous.next;
      previous.next = node;
    }
    this.length++;
  }

  remove(element) {
    if (this.head.element === element) {
      this.head = this.head.next;
      this.length--;
    } else {
      let current = this.head;
      let previous;
      while (current && !previous) {
        if (current.next && current.next.element === element) {
          previous = current;
        }

        current = current.next;
      }

      if (previous) {
        const target = previous.next;
        previous.next = target.next;
        this.length--;
      }
    }
  }

  removeAt(position) {
    if (
      typeof position !== "number" ||
      position < 0 ||
      position > this.length - 1
    ) {
      return false;
    }

    if (position === 0) {
      this.head = this.head.next;
    } else {
      const previous = this._findPreviousByPosition(position);
      previous.next = previous.next.next;
    }

    this.length--;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let result = "### Linked List ###\n\n";
    result += `[head] ${this.head.toString()}\n`;
    let next = this.head.next;

    while (next) {
      result += `[node] ${next.toString()}\n`;
      next = next.next;
    }

    result += `\nlength: ${this.length}`;

    return result;
  }

  _findPreviousByPosition(position) {
    let previous = this.head;
    let loopTime = 0;
    while (loopTime++ < position - 1) {
      previous = previous.next;
    }

    return previous;
  }
}
