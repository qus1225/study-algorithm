import { compress } from "./problem.js";

describe("코딩인터뷰완벽분석 > 1.6 문제", () => {
  it("case1", () => {
    const result = compress("aabcccccaaa");
    expect(result).toEqual("a2b1c5a3");
  });

  it("case2", () => {
    const result = compress("");
    expect(result).toEqual("");
  });

  it("case3", () => {
    const result = compress("abc");
    expect(result).toEqual("abc");
  });
});
