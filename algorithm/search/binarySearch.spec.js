import { binarySearch, binarySearchWithRecursion } from "./binarySearch";

describe("search > binarySearch 에서", () => {
  it("Binary Search는 잘 동작한다.", () => {
    const result = binarySearch([1, 3, 5, 10, 12], 10);
    expect(result).toEqual(10);
  });
});
