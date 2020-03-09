import { Queue } from "./queue";

describe("dataStructure > queue 에서", () => {
  it("Queue 클래스는 잘 동작한다.", () => {
    const queue = new Queue();

    queue.enqueue("Qus");
    queue.enqueue("Tom");
    queue.enqueue("Jackson");

    expect(queue.items).toEqual(["Qus", "Tom", "Jackson"]);
    expect(queue.size()).toEqual(3);

    const result1 = queue.dequeue();
    expect(result1).toEqual("Qus");
    expect(queue.items).toEqual(["Tom", "Jackson"]);

    const result2 = queue.front();
    expect(result2).toEqual("Tom");

    expect(queue.isEmpty()).toEqual(false);

    const result3 = queue.dequeue();
    expect(result3).toEqual("Tom");
    expect(queue.items).toEqual(["Jackson"]);

    expect(queue.size()).toEqual(1);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
});
