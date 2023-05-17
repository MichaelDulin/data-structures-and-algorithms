"use strict";

const treeIntersection = (tree1, tree2) => {
  // Create a hash map to store values from the first tree
  const hashMap = new Map();
  // Helper function to traverse the first tree and populate the hash map
  const traverseTree = (node) => {
    if (node) {
      hashMap.set(node.value, true);
      traverseTree(node.left);
      traverseTree(node.right);
    }
  };
  // Traverse the first tree and populate the hash map
  traverseTree(tree1.root);
  // Helper function to find common values in the second tree
  const findCommonVal = (node, commonValues) => {
    if (node) {
      if (hashMap.has(node.value)) {
        commonValues.add(node.value);
      }
      findCommonVal(node.left, commonValues);
      findCommonVal(node.right, commonValues);
    }
  }
  // Traverse the second tree and find common values
  const commonValues = new Set();
  findCommonValue(tree2.root, commonValues);
  return commonValues;
};

module.exports = {treeIntersection};
