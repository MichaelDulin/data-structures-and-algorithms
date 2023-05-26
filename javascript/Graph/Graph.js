class Node {
  constructor(value) {
    this.value = value;
    this.edges = new Map();
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, new Node(value));
    } else {
      console.log('Node already exists!');
    }
  }

  addEdge(node1Value, node2Value, edgeValue) {
    let node1 = this.nodes.get(node1Value);
    let node2 = this.nodes.get(node2Value);

    if (node1 && node2) {
      node1.edges.set(node2Value, edgeValue);
      node2.edges.set(node1Value, edgeValue);
    } else {
      console.log('One or both nodes do not exist!');
    }
  }

  printGraph() {
    this.nodes.forEach((node, nodeValue) => {
      let edgesString = "";
      node.edges.forEach((edgeValue, adjacentNodeValue) => {
        edgesString += adjacentNodeValue + '(' + edgeValue + ') ';
      });
      console.log(nodeValue + ' -> ' + edgesString);
    });
  }

  breadthFirst(startNodeValue) {
    let startNode = this.nodes.get(startNodeValue);

    if (!startNode) {
      console.log('Start node does not exist!');
      return;
    }

    let visited = new Set();
    let queue = [startNode];

    while (queue.length > 0) {
      let currentNode = queue.shift();

      console.log(currentNode.value);

      visited.add(currentNode.value);

      currentNode.edges.forEach((edgeValue, adjacentNodeValue) => {
        let adjacentNode = this.nodes.get(adjacentNodeValue);

        if (!visited.has(adjacentNode.value)) {
          queue.push(adjacentNode);
        }
      });
    }
  }

  depthFirst(startNodeValue) {
    let startNode = this.nodes.get(startNodeValue);

    if (!startNode) {
      console.log('Start node does not exist!');
      return;
    }

    let visited = new Set();

    this._dfsRecursive(startNode, visited);
  }

  recDepthFirst(node, visited) {
    console.log(node.value);

    visited.add(node.value);

    node.edges.forEach((edgeValue, adjacentNodeValue) => {
      let adjacentNode = this.nodes.get(adjacentNodeValue);

      if (!visited.has(adjacentNode.value)) {
        this._dfsRecursive(adjacentNode, visited);
      }
    });
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

module.exports = Graph;
