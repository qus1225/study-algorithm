import { linearSearch } from "./linearSearch";

describe("search > linearSearch 에서", () => {
  it("Linear Search는 잘 동작한다.", () => {
    const result = linearSearch([1, 3, 5, 10, 12], 10);
    expect(result).toEqual(3);
  });
});
