import { LinkedList } from "./linkedList";

describe("dataStructure > linkedList 에서", () => {
  it("LinkedList 클래스는 잘 동작한다.", () => {
    const linkedList = new LinkedList();
    linkedList.append("쿠스");
    linkedList.append("톰");
    linkedList.append("마이클");
    linkedList.append("미셀");

    expect(linkedList.head.element).toEqual("쿠스");
    expect(linkedList.head.next.element).toEqual("톰");
    expect(linkedList.head.next.next.element).toEqual("마이클");
    expect(linkedList.head.next.next.next.element).toEqual("미셀");

    const result1 = linkedList.insert(9, "에이미");
    expect(result1).toEqual(false);

    linkedList.insert(0, "에이미");
    expect(linkedList.head.element).toEqual("에이미");

    linkedList.insert(3, "룰라");
    expect(linkedList.head.next.next.next.element).toEqual("룰라");

    linkedList.remove("룰라");
    expect(linkedList.head.next.next.next.element).toEqual("마이클");

    linkedList.remove("에이미");
    expect(linkedList.head.element).toEqual("쿠스");

    linkedList.removeAt(2);
    expect(linkedList.head.next.next.element).toEqual("미셀");

    expect(linkedList.length).toEqual(3);

    expect(linkedList.indexOf("미셀")).toEqual(2);
    expect(linkedList.indexOf("티라노")).toEqual(-1);

    expect(linkedList.isEmpty()).toEqual(false);

    expect(linkedList.size()).toEqual(3);

    console.log(linkedList.toString());
  });
});
