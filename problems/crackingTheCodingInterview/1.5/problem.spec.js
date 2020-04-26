import { needOneOperation } from "./problem.js";

describe("코딩인터뷰완벽분석 > 1.5 문제", () => {
  it("case1", () => {
    const result = needOneOperation("abc", "abc");
    expect(result).toEqual(true);
  });

  it("case2", () => {
    const result = needOneOperation("pale", "ple");
    expect(result).toEqual(true);
  });

  it("case3", () => {
    const result = needOneOperation("pales", "pale");
    expect(result).toEqual(true);
  });

  it("case4", () => {
    const result = needOneOperation("pale", "bale");
    expect(result).toEqual(true);
  });

  it("case5", () => {
    const result = needOneOperation("pale", "bake");
    expect(result).toEqual(false);
  });

  it("case6", () => {
    const result = needOneOperation("", "");
    expect(result).toEqual(true);
  });

  it("case6", () => {
    const result = needOneOperation("abc", "cba");
    expect(result).toEqual(false);
  });

  it("case7", () => {
    const result = needOneOperation("palese", "pale");
    expect(result).toEqual(false);
  });
});
