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

  // BFS - 반복문 이용
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

  // BFS - 재귀 이용
  bfsWithRecursion(startV) {
    return bfs([startV], this.adjList, new Set());

    function bfs(queue, adjList, visiteds) {
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

export class WeightedGraph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
    this.costs = {};
    this.parents = {};
    this.processed = new Set();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = {};
  }

  addEdge(start, end, weight) {
    this.adjList[start][end] = weight;
  }

  toString() {
    let result = "### adjList ###\n";
    for (const key in this.adjList) {
      result += `${key}: `;
      for (const key2 in this.adjList[key]) {
        result += `->${key2}(${Object.values(this.adjList[key][key2])}) `;
      }
      result += "\n";
    }

    result += `\n\n### cost ###\n`;
    for (const key in this.costs) {
      result += `${key}: ${this.costs[key]}\n`;
    }

    result += `\n\n### parents ###\n`;
    for (const key in this.parents) {
      result += `${key}: ${this.parents[key]}\n`;
    }

    result += `\n\n### processed ###\n`;
    result += Array.from(this.processed).join(", ");
    return result;
  }

  // 다익스트라 알고리즘을 이용한 최단거리 찾기
  findLowestPath() {
    let node = this._findLowestAndUnProcessedNode();
    let cost, neighbors, newCost;
    while (node) {
      cost = this.costs[node];
      neighbors = this.adjList[node];

      for (const n in neighbors) {
        newCost = cost + neighbors[n];
        if (this.costs[n] > newCost) {
          this.costs[n] = newCost;
          this.parents[n] = node;
        }
      }

      this.processed.add(node);
      node = this._findLowestAndUnProcessedNode();
    }
  }

  _findLowestAndUnProcessedNode() {
    let lowestCost = Infinity;
    let lowestCostNode, cost;
    this.vertices.forEach(node => {
      cost = this.costs[node];
      if (cost < lowestCost && !this.processed.has(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    });

    return lowestCostNode;
  }
}
