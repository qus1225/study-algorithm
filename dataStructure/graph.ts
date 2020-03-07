// TODO: 인접행렬로 그래프 표현

// 인접리스트로 무방향 그래프 표현
export class Graph {
  // 정점목록
  private _vertices: Array<string>;
  // 인접리스트
  private _adjList: {};

  constructor() {
    this._vertices = [];
    this._adjList = {};
  }

  get vertices() {
    return this._vertices;
  }
  get adjList() {
    return this._adjList;
  }

  // 정점 추가
  addVertex(v: any) {
    this._vertices.push(v);
    this._adjList[v] = [];
  }

  // 간선 추가
  addEdge(v, w) {
    this._adjList[v] ? this._adjList[v].push(w) : (this._adjList[v] = []);
    this._adjList[w] ? this._adjList[w].push(v) : (this._adjList[w] = []);
  }

  bfsWithLoop(startV) {
    let queue: Array<any> = [];
    const visiteds = new Set();
    let neighbors = this._adjList[startV] || [];
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

    function bfs(
      queue: Array<any> = [],
      adjList: any = {},
      visiteds: any = {}
    ) {
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
