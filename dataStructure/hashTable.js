// 성능이 좋지는 않지만 구현이 단순한 lose lose 해시함수를 이용해서 구현한다.
export class HashTable {
  constructor(size) {
    this._items = [];
    // JS의 배열은 자동으로 사이즈가 조절이 되므로 size를 굳이 받을 필요는 없지만, Hash값의 범위를 정하기 위해 받음.
    this._size = size;
  }

  put(key, value) {
    const index = this._loseLoseHash(key);

    this._items[index] = value;
  }

  remove(key) {
    const index = this._loseLoseHash(key);

    this._items[index] = undefined;
  }

  get(key) {
    const index = this._loseLoseHash(key);

    return this._items[index];
  }

  toString() {
    let result = "### Hash Table ###\n\n";
    this._items.forEach((val, index) => {
      result += `${index}: ${val}\n`;
    });

    return result;
  }

  _loseLoseHash(key) {
    let hash = 0;
    key.split("").forEach((_, index) => {
      hash += key.charCodeAt(index);
    });

    return hash % this._size;
  }
}
