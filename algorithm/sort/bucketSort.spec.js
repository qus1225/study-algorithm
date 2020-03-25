import { bucketSort } from "./bucketSort";

describe("sort > bucketSort 에서", () => {
  it("Bucket Sort는 잘 동작한다.", () => {
    const result = bucketSort([5, 3, 6, 2, 10, 1, 30]);
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 30]);
  });
});
