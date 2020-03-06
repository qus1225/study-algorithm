// TODO: 인접행렬로 그래프 표현

// TODO: 인접리스트로 그래프 표현
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
  addVertex(v: string) {
    this._vertices.push(v);
    this._adjList[v] = [];
  }

  // 간선 추가
  addEdge(v, w) {
    this._adjList[v] ? this._adjList[v].push(w) : (this._adjList[v] = []);
    this._adjList[w] ? this._adjList[w].push(v) : (this._adjList[w] = []);
  }

  // debugging 용
  toString() {
    let s = "";
    this.vertices.forEach((_, i) => {
      s += this.vertices[i] + " -> ";
      const neighbors = this.adjList[this.vertices[i]];
      if (neighbors) {
        neighbors.forEach((_, j) => {
          s += neighbors[j] + " ";
        });
      }
      s += "\n";
    });

    return s;
  }
}

// TODO: 근접행렬로 그래프 표현
