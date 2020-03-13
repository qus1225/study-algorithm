export class MaxHeapTree {
  // 편리한 구현을 위해 index는 1부터 사용
  constructor() {
    this._items = [""];
  }

  get items() {
    return this._items;
  }

  get root() {
    return _items[1];
  }

  insert(key) {
    this._items.push(key);
    this._allignAfterInsert();
  }

  remove() {
    this._items[1] = this._items.pop();
    this._allignAfterRemove();
  }

  _allignAfterInsert() {
    let childIndex = this._items.length - 1;
    let child = this._items[childIndex];

    let parentIndex = Math.floor(childIndex / 2) || 1;
    let parent = this._items[parentIndex];

    let newChildIndex;
    while (parent < child) {
      newChildIndex = parentIndex;
      this._items[newChildIndex] = child;
      this._items[childIndex] = parent;

      parentIndex = Math.floor(newChildIndex / 2) || 1;
      parent = this._items[parentIndex];
      childIndex = newChildIndex;
    }
  }

  _allignAfterRemove() {
    let parentIndex = 1;
    let parent = this._items[parentIndex];

    let leftChild = this._items[parentIndex * 2];
    let rightChild = this._items[parentIndex * 2 + 1];

    let bigChild = leftChild > rightChild ? leftChild : rightChild;
    let bigChildIndex = this._items.indexOf(bigChild);

    let newParentIndex;
    while (parent < bigChild) {
      newParentIndex = bigChildIndex;
      this._items[newParentIndex] = parent;
      this._items[parentIndex] = bigChild;

      leftChild = this._items[newParentIndex * 2];
      rightChild = this._items[newParentIndex * 2 + 1];

      bigChild = leftChild > rightChild ? leftChild : rightChild;
      bigChildIndex = this._items.indexOf(bigChild);
      parentIndex = newParentIndex;
    }
  }
}

export class MinHeapTree {
  // 편리한 구현을 위해 index는 1부터 사용
  constructor() {
    this._items = [""];
  }

  get items() {
    return this._items;
  }

  get root() {
    return _items[1];
  }

  insert(key) {
    this._items.push(key);
    this._allignAfterInsert();
  }

  remove() {
    this._items[1] = this._items.pop();
    this._allignAfterRemove();
  }

  _allignAfterInsert() {
    let childIndex = this._items.length - 1;
    let child = this._items[childIndex];

    let parentIndex = Math.floor(childIndex / 2) || 1;
    let parent = this._items[parentIndex];

    let newChildIndex;
    while (parent > child) {
      newChildIndex = parentIndex;
      this._items[newChildIndex] = child;
      this._items[childIndex] = parent;

      parentIndex = Math.floor(newChildIndex / 2) || 1;
      parent = this._items[parentIndex];
      childIndex = newChildIndex;
    }
  }

  _allignAfterRemove() {
    let parentIndex = 1;
    let parent = this._items[parentIndex];

    let leftChild = this._items[parentIndex * 2];
    let rightChild = this._items[parentIndex * 2 + 1];

    let smallChild = leftChild < rightChild ? leftChild : rightChild;
    let smallChildIndex = this._items.indexOf(smallChild);

    let newParentIndex;
    while (parent > smallChild) {
      newParentIndex = smallChildIndex;
      this._items[newParentIndex] = parent;
      this._items[parentIndex] = smallChild;

      leftChild = this._items[newParentIndex * 2];
      rightChild = this._items[newParentIndex * 2 + 1];

      smallChild = leftChild < rightChild ? leftChild : rightChild;
      smallChildIndex = this._items.indexOf(smallChild);
      parentIndex = newParentIndex;
    }
  }
}
