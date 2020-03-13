/**
 * 인접리스트로 그래프 표현
 * - JavaScript는 인접행렬로 구현하는게 오히려 더 복잡하고 번거롭다.
 * - 활용도도 인접리스트 구현이 더 나으므로 굳이 인접행렬을 사용할 필요는 없을 것 같다.
 */
// 인접리스트로 그래프 표현
export class Graph {
  constructor() {
    // 정점목록
    this.vertices = [];
    // 인접리스트
    this.adjList = {};
  }

  // 정점 추가
  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }

  // 간선 추가
  addEdge(v, w) {
    this.adjList[v] ? this.adjList[v].push(w) : (this.adjList[v] = []);
    this.adjList[w] ? this.adjList[w].push(v) : (this.adjList[w] = []);
  }

  bfsWithLoop(startV) {
    let queue = [];
    const visiteds = new Set();
    let neighbors = this.adjList[startV] || [];
    let target;
    neighbors.sort();
    queue.push(startV);
    queue = [...queue, ...neighbors];

    const result = [];

    while (queue.length > 0) {
      target = queue.shift();
      result.push(target);
      visiteds.add(target);
      neighbors = this.adjList[target] || [];
      neighbors.sort();
      neighbors.forEach(val => {
        if (!visiteds.has(val) && queue.indexOf(val) < 0) {
          queue.push(val);
        }
      });
    }

    return result;
  }

  bfsWithRecursion(startV) {
    return bfs([startV], this.adjList, new Set());

    function bfs(queue = [], adjList = {}, visiteds = {}) {
      let result = [];

      // base case
      if (queue.length === 0) {
        return result;
      }

      const target = queue.shift();
      result.push(target);
      visiteds.add(target);
      const neighbors = adjList[target] || [];
      neighbors.sort();
      neighbors.forEach(val => {
        if (!visiteds.has(val) && queue.indexOf(val) < 0) {
          queue.push(val);
        }
      });

      return [...result, ...bfs(queue, adjList, visiteds)];
    }
  }
}
