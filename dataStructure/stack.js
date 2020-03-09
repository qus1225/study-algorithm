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

// 10진법 수를 2진수로 변환
export function decimalTobinary(decimal) {
  const binaryArray = [];

  while (decimal > 0) {
    binaryArray.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return binaryArray.reverse().join("");
}

// 10진법 수를 N진수로 변환
export function decimalToBase(decimal, base) {
  const binaryArray = [];
  const digits = "0123456789ABCDEF";

  while (decimal > 0) {
    binaryArray.push(decimal % base);
    decimal = Math.floor(decimal / base);
  }

  const result = binaryArray.reverse().map(val => digits[val]);

  return result.join("");
}
