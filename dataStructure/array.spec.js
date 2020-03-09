import { fibonacci } from "./array";

describe("dataStructure > array 에서", () => {
  it("피보나치 수열 함수는 잘 동작한다.", () => {
    const length = 17;
    const result = fibonacci(length);
    expect(result).toEqual(
      "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987"
    );
  });
});
