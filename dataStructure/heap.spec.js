import { MaxHeapTree, MinHeapTree } from "./heap";

describe("dataStructure > heap 에서", () => {
  it("MaxHeapTree 클래스는 잘 동작한다.", () => {
    const heap = new MaxHeapTree();

    heap.insert(9);
    heap.insert(3);
    heap.insert(5);
    heap.insert(10);
    heap.insert(6);
    expect(heap.items).toEqual(["", 10, 9, 5, 3, 6]);

    heap.insert(8);
    expect(heap.items).toEqual(["", 10, 9, 8, 3, 6, 5]);

    heap.remove();
    expect(heap.items).toEqual(["", 9, 6, 8, 3, 5]);
    heap.remove();
    expect(heap.items).toEqual(["", 8, 6, 5, 3]);
  });

  it("MinHeapTree 클래스는 잘 동작한다.", () => {
    const heap = new MinHeapTree();

    heap.insert(9);
    heap.insert(3);
    heap.insert(5);
    heap.insert(10);
    heap.insert(6);
    expect(heap.items).toEqual(["", 3, 6, 5, 10, 9]);

    heap.insert(2);
    expect(heap.items).toEqual(["", 2, 6, 3, 10, 9, 5]);

    heap.remove();
    expect(heap.items).toEqual(["", 3, 6, 5, 10, 9]);
    heap.remove();
    expect(heap.items).toEqual(["", 5, 6, 9, 10]);
  });
});
