'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const treeArr = [];
    const recurse = (root) => {
      treeArr.push(root.value);
      if (root.left) {
        recurse(root.left);
      }
      if (root.right) {
        recurse(root.right);
      }
    };
    recurse(this.root);
    return(treeArr);
  }


  inOrder() {
    const treeArr = [];
    const recurse = (root) => {
      if(root.left) {
        recurse(root.left);
      }
      treeArr.push(root.value);
      if (root.right) {
        recurse(root.right);
      }
    };
    recurse(this.root);
    return treeArr;
  }

  postOrder() {
    const treeArr = [];
    const recurse = (root) => {
      root.left ? recurse(root.left) : root.right ? recurse(root.right) : treeArr.push(root.value)
    };
    recurse(this.root);
    return treeArr;
  }
}


class BinarySearchTree extends BinaryTree{
  add(value) {
    // Return: nothing
    let node = new Node(value);
    const addNode = (curNode, newNode) => {
      if (curNode.value > newNode.value) {
        if (curNode.left === null) {
          return curNode.left = newNode;
        } else {
          addNode(curNode.left, newNode);
        }
      } else {
        if (curNode.right === null) {
          return curNode.right = newNode;
        } else {
          addNode(curNode.right, newNode);
        }
      }
    };
    if (this.root === null) {
      this.root = node;
    } else {
      addNode(this.root, node);
    }
  }
}


