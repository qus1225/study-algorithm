import { Stack } from "./stack";

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
});
