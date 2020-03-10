import { LinkedList, DoublyLinkedList } from "./linkedList";

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

    // console.log(linkedList.toString());
  });

  it("DoublyLinkedList 클래스는 잘 동작한다.", () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append("쿠스");
    doublyLinkedList.append("쉘든");
    doublyLinkedList.insert(1, "바우");
    doublyLinkedList.append("나비");

    expect(doublyLinkedList.head.element).toEqual("쿠스");
    expect(doublyLinkedList.head.next.element).toEqual("바우");
    expect(doublyLinkedList.head.next.next.element).toEqual("쉘든");
    expect(doublyLinkedList.head.next.next.next.element).toEqual("나비");

    expect(doublyLinkedList.tail.element).toEqual("나비");

    doublyLinkedList.remove("쿠스");
    doublyLinkedList.remove("바우");

    expect(doublyLinkedList.head.element).toEqual("쉘든");
    expect(doublyLinkedList.head.next.element).toEqual("나비");
    doublyLinkedList.append("복실");
    doublyLinkedList.append("만수");
    doublyLinkedList.append("앨리스");

    doublyLinkedList.removeAt(2);
    doublyLinkedList.removeAt(0);
    doublyLinkedList.removeAt(2);
    expect(doublyLinkedList.head.element).toEqual("나비");
    expect(doublyLinkedList.head.next.element).toEqual("만수");

    expect(doublyLinkedList.length).toEqual(2);

    // console.log(doublyLinkedList.toString());
  });
});
