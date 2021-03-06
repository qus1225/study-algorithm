import { fibonacci, multiplicationTable, CircularArray } from "./array";

describe("dataStructure > array 에서", () => {
  it("링버퍼는 잘 동작한다.", () => {
    const ringBuffer = new CircularArray(3);

    Array.from({ length: 5 }, (_, index) => {
      ringBuffer.push(index);
    });

    expect(ringBuffer[0]).toEqual(2);
    expect(ringBuffer[1]).toEqual(3);
    expect(ringBuffer[2]).toEqual(4);
  });

  it("피보나치 수열 함수는 잘 동작한다.", () => {
    const length = 17;
    const result = fibonacci(length);
    expect(result).toEqual(
      "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987"
    );
  });

  it("구구단 함수는 잘 동작한다.", () => {
    const times = 8;
    const result = multiplicationTable(times);
    // expect(result).toEqual("qweeqw");
    const expected =
      "8 * 1 = 8 \n8 * 2 = 16 \n8 * 3 = 24 \n8 * 4 = 32 \n8 * 5 = 40 \n8 * 6 = 48 \n8 * 7 = 56 \n8 * 8 = 64 \n8 * 9 = 72 \n";
    expect(result).toEqual(expected);
    // );
  });
});
