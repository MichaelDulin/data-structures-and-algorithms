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
    this.root === null ? this.root = node : addNode(this.root, node);
  }

  contains(value) {
    const recurse = (curNode, curVal) => {
      // return curNode.value === curVal ? true : curNode.left === null && curNode.right === null ? false : curNode.value > curVal ? recurse(curNode.value, curVal) : recurse(curNode.right, curVal);
      if (curNode.value === curVal) {
        return true;
      } else if (curNode.left === null && curNode.right === null) {
        return false;
      } else if (curNode.value > curVal) {
        return recurse(curNode.value, curVal);
      } else if (curNode.value <= curVal) {
        return recurse(curNode.right, curVal);
      }
    };
    return this.root === null ? false : recurse(this.root, value);
  }

  getMax() {
    let curMax = null;
    const recurse = (node) => {
      if (node.value > curMax) {
        curMax = node.value;
      }
      if (node.left !== null) {
        recurse(node.left);
      }
      if (node.right !== null) {
        recurse(node.right);
      }
    };
    if (this.root === null) {
      return 'No values found in tree';
    }
    recurse(this.root);
    return curMax;
  }
}


