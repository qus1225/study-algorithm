import { factorial } from "../algorithm/structure/recursion";

describe("Recursion 중", () => {
  it("factorial는 잘 동작한다.", () => {
    const result = factorial(5);
    expect(result).toEqual(120);
  });
});
