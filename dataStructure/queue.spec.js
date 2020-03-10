import { Queue, PriorityQueue } from "./queue";

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

  it("PriorityQueue 클래스는 잘 동작한다.", () => {
    const queue = new PriorityQueue();

    queue.enqueue("Qus", 4);
    queue.enqueue("Tom", 3);
    queue.enqueue("Jackson", 2);

    expect(queue.front()).toEqual("Jackson");
    expect(queue.dequeue()).toEqual("Jackson");

    queue.enqueue("Paul", 5);
    queue.enqueue("Penny", 1);

    const expected = [
      { _element: "Penny", _priority: 1 },
      { _element: "Tom", _priority: 3 },
      { _element: "Qus", _priority: 4 },
      { _element: "Paul", _priority: 5 }
    ];
    expect(queue.items).toEqual(expected);
  });
});
