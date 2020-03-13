import { BinaryTree, BinarySearchTree, MaxHeapTree, MinHeapTree } from "./tree";

describe("dataStructure > tree 에서", () => {
  it("BinaryTree 클래스는 잘 동작한다.", () => {
    const tree = new BinaryTree();
    tree.insert("쿠스");
    tree.insert("톰");
    tree.insert("막달레나");
    tree.insert("사와디캅");
    tree.insert("맥베스");

    expect(tree.search("쿠스")).toEqual(true);
    expect(tree.search("톰")).toEqual(true);
    expect(tree.search("막달레나")).toEqual(true);
    expect(tree.search("사와디캅")).toEqual(true);
    expect(tree.search("와우")).toEqual(false);

    tree.remove("쿠스");
    expect(tree.search("쿠스")).toEqual(false);
    expect(tree.search("톰")).toEqual(true);
    expect(tree.search("막달레나")).toEqual(true);
    expect(tree.search("사와디캅")).toEqual(true);

    tree.remove("톰");
    expect(tree.search("톰")).toEqual(false);
    expect(tree.search("막달레나")).toEqual(true);
    expect(tree.search("사와디캅")).toEqual(true);

    tree.remove("사와디캅");
    expect(tree.search("막달레나")).toEqual(true);
    expect(tree.search("사와디캅")).toEqual(false);

    // tree.preOrderTraverse(key => console.log(key));
    // tree.postOrderTraverse(key => console.log(key));
    // tree.inOrderTraverse(key => console.log(key));
  });

  it("BinarySearchTree 클래스는 잘 동작한다.", () => {
    const bst = new BinarySearchTree();

    expect(bst.search(5)).toEqual(false);
    bst.insert(5);
    expect(bst.search(5)).toEqual(true);

    bst.insert(7);
    bst.insert(3);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(9);

    expect(bst.min()).toEqual(2);
    expect(bst.max()).toEqual(9);

    bst.remove(5);
    expect(bst.search(5)).toEqual(false);
    expect(bst.search(7)).toEqual(true);
    expect(bst.search(3)).toEqual(true);
    expect(bst.search(2)).toEqual(true);
    expect(bst.search(4)).toEqual(true);
    expect(bst.search(6)).toEqual(true);
    expect(bst.search(9)).toEqual(true);
    // bst.preOrderTraverse(key => console.log(key));
    // bst.postOrderTraverse(key => console.log(key));
    // bst.inOrderTraverse(key => console.log(key));
  });

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

  it.only("MinHeapTree 클래스는 잘 동작한다.", () => {
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
