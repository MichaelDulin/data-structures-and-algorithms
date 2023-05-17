'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add to front
  insert(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    const curHead = this.head;
    this.head = newNode;
    newNode.next = curHead;
  }

  // Find Value
  includes(val) {
    let cur = this.head;
    while (cur !== null) {
      if (cur.data === val) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  // Print Linked List
  toString() {
    let cur = this.head;
    let returnStr = ' ';
    while (cur !== null) {
      returnStr += `{ ${cur.data} } -> `;
      cur = cur.next;
    }
    return (returnStr += 'NULL');
  }

  // Add to end
  append(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur !== null) {
      cur = cur.next;
    }
    this.head = node;
    node.next = cur;
  }

  // Add new node before specified node
  insertBefore(targetVal, newVal) {
    let node = new Node(newVal);
    if (this.includes(targetVal) === false) {
      console.log('Could not find value - adding to HEAD');
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next.next !== targetVal) {
      cur = cur.next;
    }
    cur.next = node;
    node.next = cur.next.next;
  }

  // Add new node after specified node
  insertAfter(targetVal, newVal) {
    let node = new Node(newVal);
    if (this.includes(targetVal) === false) {
      console.log('Could not find value - adding to HEAD');
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur !== targetVal) {
      cur = cur.next;
    }
    cur.next = node;
    node.next = cur.next.next;
  }

  // Return value found at node that is k (number) away from tail
  kthFromEnd(k) {
    let cur = this.head;
    let length = 0;
    while (cur !== null) {
      length++;
      cur = cur.next;
    }
    if (length <= k) {
      return 'Error: k cannot exceed length of LL';
    }
    cur = this.head;
    let targetIdx = length - k;
    let counter = 0;
    while (counter < targetIdx) {
      cur = cur.next;
      counter++;
    }
    return cur;
  }
}

module.exports = LinkedList;
