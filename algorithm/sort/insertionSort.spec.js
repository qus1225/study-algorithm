import { insertionSort } from "./insertionSort";

describe("sort > insertionSort 에서", () => {
  it("InsertionSort Sort는 잘 동작한다.", () => {
    const result = insertionSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
