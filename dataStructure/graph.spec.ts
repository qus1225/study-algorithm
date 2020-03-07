import { Graph } from "./graph";

describe("dataStructure > graph 에서", () => {
  it("Graph 클래스는 잘 동작한다.", () => {
    const graph = new Graph();
    const myVertices = ["A", "B", "C", "D", "E", "F", "G"];
    myVertices.forEach((_, i) => {
      graph.addVertex(myVertices[i]);
    });
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("A", "D");
    graph.addEdge("C", "D");
    graph.addEdge("C", "G");
    graph.addEdge("D", "E");
    graph.addEdge("B", "F");

    expect(graph.vertices).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
    expect(graph.adjList).toEqual({
      A: ["B", "C", "D"],
      B: ["A", "F"],
      C: ["A", "D", "G"],
      D: ["A", "C", "E"],
      E: ["D"],
      F: ["B"],
      G: ["C"]
    });
  });

  it("bfsWithLoop 는 잘 동작한다.", () => {
    const graph = new Graph();
    const myVertices = [1, 2, 3, 4];
    myVertices.forEach((_, i) => {
      graph.addVertex(myVertices[i]);
    });
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);

    expect(graph.vertices).toEqual([1, 2, 3, 4]);
    expect(graph.adjList).toEqual({
      1: [2, 3, 4],
      2: [1, 4],
      3: [1, 4],
      4: [1, 2, 3]
    });

    expect(graph.bfsWithLoop(1)).toEqual([1, 2, 3, 4]);
  });

  it.only("bfsWithRecursion 는 잘 동작한다.", () => {
    const graph = new Graph();
    const myVertices = [1, 2, 3, 4];
    myVertices.forEach((_, i) => {
      graph.addVertex(myVertices[i]);
    });
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);

    expect(graph.vertices).toEqual([1, 2, 3, 4]);
    expect(graph.adjList).toEqual({
      1: [2, 3, 4],
      2: [1, 4],
      3: [1, 4],
      4: [1, 2, 3]
    });

    // console.log(graph.bfsWithRecursion(1));
    expect(graph.bfsWithLoop(1)).toEqual([1, 2, 3, 4]);
  });
});
