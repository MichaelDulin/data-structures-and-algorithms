class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new Node(value);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(node1, node2, weight = null) {
    if (!this.nodes.includes(node1) || !this.nodes.includes(node2)) {
      throw new Error("Both nodes should already be in the graph");
    }

    node1.edges.push({ node: node2, weight });
    node2.edges.push({ node: node1, weight });
  }

  getNodes() {
    return this.nodes;
  }

  getNeighbors(node) {
    return node.edges;
  }

  size() {
    return this.nodes.length;
  }
}
