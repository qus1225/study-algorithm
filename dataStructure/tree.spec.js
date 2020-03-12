import { BinaryTree } from "./tree";

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

    tree.preOrderTraverse(key => console.log(key));

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

    tree.preOrderTraverse(key => console.log(`after ${key}`));

    // tree.postOrderTraverse(key => console.log(key));
    // tree.inOrderTraverse(key => console.log(key));
    console.log(tree);
  });
});
