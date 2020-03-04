import { factorial, sum, findMax } from "../algorithm/structure/recursion";

describe("Recursion 중", () => {
  it("factorial는 잘 동작한다.", () => {
    const result = factorial(5);
    expect(result).toEqual(120);
  });

  it("sum은 잘 동작한다.", () => {
    const result = sum([1, 2, 3, 9, 5, 3, 3]);
    expect(result).toEqual(26);
  });

  it("findMax는 잘 동작한다.", () => {
    const result = findMax([1, 2, 3, 9, 5]);
    expect(result).toEqual(9);
  });
});
