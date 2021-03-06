class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    // If the vertex already exists, return
    if (this.adjacencyList[key]) return;
    this.adjacencyList[key] = [];
  }

  addEdge(key, value) {
    // If no vertex exists return
    if (!this.adjacencyList[key]) return;

    // If no vertex exists return
    if (!this.adjacencyList[value]) return;

    // Avoid duplicate Edge
    if (this.adjacencyList[key].indexOf(value) !== -1) return;
    if (this.adjacencyList[value].indexOf(key) !== -1) return;

    this.adjacencyList[key].push(value);
    this.adjacencyList[value].push(key);
  }

  removeEdge(v1, v2) {
    // If no vertex exists return
    if (!this.adjacencyList[v1]) return;

    // If no vertex exists return
    if (!this.adjacencyList[v2]) return;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertices(v1, v2) {
    // If no vertex exists return
    if (!this.adjacencyList[v1]) return;

    // If no vertex exists return
    if (!this.adjacencyList[v2]) return;

    // Remove vertices 1
    const v1Edges = this.adjacencyList[v1];
    for (const edge of v1Edges) {
      this.removeEdge(v1, edge);
    }
    delete this.adjacencyList[v1];

    // Remove vertices 2
    const v2Edges = this.adjacencyList[v2];
    for (const edge of v2Edges) {
      this.removeEdge(v2, edge);
    }

    delete this.adjacencyList[v2];
  }

  depthFirstSearch(start) {
    const stack = [];
    const visited = {};
    this.traverse(start, stack, visited);
    return stack;
  }

  breadthFirstSearch(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    while (stack.length) {
      const vertex = stack.shift();
      result.push(vertex);
      for (const edge of this.adjacencyList[vertex]) {
        if (!visited[edge]) {
          stack.push(edge);
          visited[edge] = true;
        }
      }
    }
    return result;
  }

  depthFirstSearchIterative(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    while (stack.length) {
      const vertex = stack.pop();
      visited[vertex] = true;
      result.push(vertex);
      for (const edge of this.adjacencyList[vertex]) {
        if (!visited[edge]) {
          stack.push(edge);
          visited[edge] = true;
        }
      }
    }
    return result;
  }

  traverse(vertex, stack, visited) {
    if (!this.adjacencyList[vertex] || this.adjacencyList[vertex].length === 0) return;
    visited[vertex] = true;
    stack.push(vertex);
    for (const edge of this.adjacencyList[vertex]) {
      if (!visited[edge]) {
        this.traverse(edge, stack, visited);
      }
    }
  }
}

const g = new Graph();

// g.addVertex('john')
// g.addVertex('arthur')
// g.addVertex('dutch')

// g.addEdge('john', 'arthur')
// g.addEdge('john', 'dutch')
// g.addEdge('arthur', 'john')

// // g.removeEdge('arthur', 'john')

// g.removeVertices('arthur', 'john')

g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addEdge('a', 'b');
g.addEdge('b', 'd');
g.addEdge('c', 'd');
g.addEdge('c', 'd');

const dfs = g.depthFirstSearch('a');
const dfsIt = g.depthFirstSearchIterative('a');
const bfs = g.breadthFirstSearch('a');

console.log(dfs);
console.log(dfsIt);
console.log(bfs);

console.log(g.adjacencyList);
