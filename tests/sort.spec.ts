import {
  selectionSort,
  selectionSortWithImmutable
} from "../algorithm/sort/selectionSort";
import { quickSort } from "../algorithm/sort/quickSort";

describe("Sort 중", () => {
  it("Selection Sort는 잘 동작한다.", () => {
    const result = selectionSortWithImmutable([5, 3, 6, 2, 10]);
    expect(result).toEqual([2, 3, 5, 6, 10]);
  });

  it("Selection2 Sort는 잘 동작한다.", () => {
    const result = selectionSort([5, 3, 6, 2, 10]);
    expect(result).toEqual([2, 3, 5, 6, 10]);
  });

  it("Quick Sort는 잘 동작한다.", () => {
    const result = quickSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
