import { Graph } from "../dataStructure/graph";

describe("DataStructure 중", () => {
  it("Graph는 잘 동작한다.", () => {
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

    console.log("graph.toString()", graph.toString());
  });
});
