import { selectionSort } from "./selectionSort";

describe("sort > selectionSort 에서", () => {
  it("Selection Sort는 잘 동작한다.", () => {
    const result = selectionSort([5, 3, 6, 2, 10]);
    expect(result).toEqual([2, 3, 5, 6, 10]);
  });
});
