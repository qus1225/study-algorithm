import { binarySearch } from "../algorithm/search/binarySearch";

describe("Search 중", () => {
  it("Binary Search는 잘 동작한다.", () => {
    const result = binarySearch([1, 3, 5, 10, 12], 10);
    expect(result).toEqual(3);
  });
});
