import { Stack, decimalTobinary, decimalToBase } from "./stack";

describe("dataStructure > stack 에서", () => {
  it("Stack 클래스는 잘 동작한다.", () => {
    const stack = new Stack();

    stack.push("Qus");
    stack.push("Tom");
    stack.push("Jackson");

    expect(stack.items).toEqual(["Qus", "Tom", "Jackson"]);

    stack.pop();
    expect(stack.items).toEqual(["Qus", "Tom"]);

    const peekResult = stack.peek();
    expect(peekResult).toEqual("Tom");
    expect(stack.items).toEqual(["Qus", "Tom"]);

    expect(stack.isEmpty()).toEqual(false);
    expect(stack.size()).toEqual(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.size()).toEqual(0);
  });

  it("decimalTobinary 함수는 잘 동작한다.", () => {
    expect(decimalTobinary(156)).toEqual("10011100");
    expect(decimalTobinary(30)).toEqual("11110");
  });

  it("decimalToBase 함수는 잘 동작한다.", () => {
    expect(decimalToBase(156, 2)).toEqual("10011100");
    expect(decimalToBase(156, 8)).toEqual("234");
    expect(decimalToBase(156, 16)).toEqual("9C");
    // expect(decimalToBase(30)).toEqual("11110");
  });
});
