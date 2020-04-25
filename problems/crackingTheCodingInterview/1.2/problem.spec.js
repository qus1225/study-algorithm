import { isPermutaiton } from "./problem.js";

describe("코딩인터뷰완벽분석 > 1.2 문제", () => {
  it("case1", () => {
    const result = isPermutaiton("abc", "ab");
    expect(result).toEqual(false);
  });

  it("case2", () => {
    const result = isPermutaiton("", "");
    expect(result).toEqual(false);
  });

  it("case3", () => {
    const result = isPermutaiton("abc", "cab");
    expect(result).toEqual(true);
  });

  it("case4", () => {
    const result = isPermutaiton("abcb", "cab");
    expect(result).toEqual(false);
  });

  it("case4", () => {
    const result = isPermutaiton("aab", "aab");
    expect(result).toEqual(true);
  });

  it("case4", () => {
    const result = isPermutaiton("aab", "aba");
    expect(result).toEqual(true);
  });

  it("case4", () => {
    const result = isPermutaiton("aab", "baa");
    expect(result).toEqual(true);
  });
});
