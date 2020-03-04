import {
  binarySearch,
  binarySearchWithRecursion
} from "../algorithm/search/binarySearch";

describe("Search 중", () => {
  it("Binary Search는 잘 동작한다.", () => {
    const result = binarySearch([1, 3, 5, 10, 12], 10);
    expect(result).toEqual(3);
  });

  it("Binary Search Recursion은 잘 동작한다.", () => {
    const result1 = binarySearchWithRecursion([1, 3, 5, 10, 12], 10);
    expect(result1).toEqual(10);

    const result2 = binarySearchWithRecursion([1, 3, 5, 10, 12], 13);
    expect(result2).toEqual(null);
  });
});
