import { Graph, WeightedGraph } from "./graph";

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

  it("bfsWithRecursion 는 잘 동작한다.", () => {
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

    expect(graph.bfsWithRecursion(1)).toEqual([1, 2, 3, 4]);
  });

  it("Graph 클래스는 잘 동작한다", () => {
    const graph = new WeightedGraph();

    graph.addVertex("START");
    graph.addVertex("A");
    graph.addEdge("START", "A", 6);
    graph.addVertex("B");
    graph.addEdge("START", "B", 2);
    graph.addEdge("B", "A", 3);
    graph.addEdge("B", "END", 5);
    graph.addEdge("A", "END", 1);

    graph.costs["A"] = 6;
    graph.costs["B"] = 2;
    graph.costs["END"] = Infinity;

    graph.parents["A"] = "START";
    graph.parents["B"] = "START";
    graph.parents["END"] = null;

    graph.findLowestPath();

    expect(graph.parents["END"]).toEqual("A");
    expect(graph.parents["A"]).toEqual("B");
    expect(graph.parents["B"]).toEqual("START");

    // console.log(graph.toString());
  });
});
