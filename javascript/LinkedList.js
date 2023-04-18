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
  insert(val){
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
  includes(val){
    let cur = this.head;
    while(cur.data !== null){
      if (cur.data === val) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  // Print Linked List
  toString(){
    let cur = this.head;
    let returnStr = ' ';
    while (cur.data !== null) {
      returnStr += `{ ${cur.data} } -> `;
      cur = cur.next;
    }
    return returnStr += 'NULL';
  }

  // Add to end
  append(val){
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while(cur !== null) {
      cur = cur.next;
    }
    this.head = node;
    node.next = cur.data;
  }

  // Add new node before specified node
  insertBefore(targetVal, newVal){
    let node = new Node(newVal);
    if (this.includes(targetVal) === false) {
      console.log('Could not find value - adding to HEAD');
      this.head = node;
      return;
    }
    let cur = this.head;
    while(cur.next.next !== targetVal){
      cur.data = cur.next;
    }
    node.data = cur.next;
    node.next = cur.next.next;
  }

  // Add new node after specified node
  insertAfter(targetVal, newVal){
    let node = new Node(newVal);
    if (this.includes(targetVal) === false) {
      console.log('Could not find value - adding to HEAD');
      this.head = node;
      return;
    }
    let cur = this.head;
    while(cur.data !== targetVal){
      cur.data = cur.next;
    }
    cur.next = node;
    node.next = cur.next.next;
  }

  zip(list1, list2) {
    let cur1 = list1.head;
    let cur2 = list2.head;
    let finalList = new LinkedList;
    let counter = 1;
    while (cur1 !== null && cur2 !== null) {
      if (counter % 2 !== 0){
        let val = new
      }
    }
  }

}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

  peek() {
    if (this.items.length == 0)
      return "No elements in Stack";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }
}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }
  
  get isEmpty() {
    return this.length === 0;
  }
}








module.exports = LinkedList;
