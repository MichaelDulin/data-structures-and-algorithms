'use strict';

class Node {
  constructor(key, data, parent = null) {
    this.key = key;
    this.data = data;
    this.parent = parent;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(key, value, parentKey) {
    const newNode = new Node(key, value, parentKey);
    if (!this.root) {
      this.root = newNode;
    } else {
      try {
        const targetParent = this.find(parentKey);
        newNode.parent = targetParent;
        targetParent.children.push(newNode);
      } catch (err) {
        console.error(
          `Node not found`
        );
      }
    }
  }

  printTreeAsString(root) {
    const treeArr = [];
    const recurse = (node, treeArr) =>{
      if(!node) return;
      for (const child of node.children) {
        recurse(child, treeArr);
      }
      let fizzBuzz = node.data % 3 === 0 && node.data % 5 === 0 ? 'FizzBuzz' : node.data % 3 === 0 ? 'Fizz' : node.data % 5 === 0 ? 'Buzz' : toString(node.data);
      treeArr.push(fizzBuzz);
    };
    recurse(root, treeArr);
    return treeArr;
  }
}

