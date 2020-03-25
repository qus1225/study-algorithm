import { mergeSort } from "./mergeSort";

describe("sort > insertionSort 에서", () => {
  it("MergeSort Sort는 잘 동작한다.", () => {
    const result = mergeSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
