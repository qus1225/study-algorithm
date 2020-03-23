import { bubbleSort } from "./bubbleSort";

describe("sort > bubbleSort 에서", () => {
  it("Bubble Sort는 잘 동작한다.", () => {
    const result = bubbleSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
