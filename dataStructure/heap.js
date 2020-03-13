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

  /**
   * 구현 절차
   * - 1) 힙의 가장 마지막 위치(배열의 마지막)에 노드에 추가한다
   * - 2) 힙의 조건을 만족시키도록 연산 (부모노드와 교환)
   *  - 새로 추가한 노드와 부모 노드를 비교하여 부모노드가 더 작으면 위치를 바꾼다
   *  - (더 큰 부모노드가 없을때까지 반복)
   */
  insert(key) {
    this._items.push(key);
    this._allignAfterInsert();
  }

  /**
   * 힙의 삭제는 루트 노드 삭제만 구현한다. (queue의 pop 연산이라고 생각하면 됨)
   *
   * 구현 절차
   * - 1) 루트노드를 제거
   * - 2) 제거한 루트노드자리에 마지막 노드를 삽입
   * - 3) 힙의 조건을 만족시키도록 연산
   *  - 루트노드의 자식노드 중 더 큰 값과 교환한다.
   *  - (더 큰 자식노드가 없을때까지 반복)
   */
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

  /**
   * 구현 절차
   * - 1) 힙의 가장 마지막 위치(배열의 마지막)에 노드에 추가한다
   * - 2) 힙의 조건을 만족시키도록 연산 (부모노드와 교환)
   *  - 새로 추가한 노드와 부모 노드를 비교하여 부모노드가 더 크면 위치를 바꾼다
   *  - (더 큰 부모노드가 없을때까지 반복)
   */
  insert(key) {
    this._items.push(key);
    this._allignAfterInsert();
  }

  /**
   * 힙의 삭제는 루트 노드 삭제만 구현한다. (queue의 pop 연산이라고 생각하면 됨)
   *
   * 구현 절차
   * - 1) 루트노드를 제거
   * - 2) 제거한 루트노드자리에 마지막 노드를 삽입
   * - 3) 힙의 조건을 만족시키도록 연산
   *  - 루트노드의 자식노드 중 더 작은 값과 교환한다.
   *  - (더 작은 자식노드가 없을때까지 반복)
   */
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
