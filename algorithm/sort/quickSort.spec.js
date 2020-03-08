import { selectionSort, selectionSortWithImmutable } from "./selectionSort";
import { quickSort } from "./quickSort";

describe("sort > quickSort 에서", () => {
  it("Quick Sort는 잘 동작한다.", () => {
    const result = quickSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
