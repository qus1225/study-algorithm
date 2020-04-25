import { hasDuplicate } from "./1.1.js";

describe("코딩인터뷰완벽분석 > 1.1 문제", () => {
  it("case1", () => {
    const result = hasDuplicate("");
    expect(result).toEqual(false);
  });

  it("case2", () => {
    const result = hasDuplicate("qus");
    expect(result).toEqual(false);
  });

  it("case3", () => {
    const result = hasDuplicate("abb");
    expect(result).toEqual(true);
  });

  it("case4", () => {
    const result = hasDuplicate("abbbbbb");
    expect(result).toEqual(true);
  });

  it("case5", () => {
    const result = hasDuplicate("babbbbbb");
    expect(result).toEqual(true);
  });

  it("case6", () => {
    const result = hasDuplicate("aab");
    expect(result).toEqual(true);
  });

  it("case7", () => {
    const result = hasDuplicate("a");
    expect(result).toEqual(false);
  });

  it("case8", () => {
    const result = hasDuplicate("abcdeff");
    expect(result).toEqual(true);
  });
});
