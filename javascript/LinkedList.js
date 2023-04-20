"use strict";

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
      if (cur === val) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  // Print Linked List
  toString() {
    let cur = this.head;
    let returnStr = " ";
    while (cur !== null) {
      returnStr += `{ ${cur} } -> `;
      cur = cur.next;
    }
    return (returnStr += "NULL");
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
      console.log("Could not find value - adding to HEAD");
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next.next !== targetVal) {
      cur = cur.next;
    }
    node = cur.next;
    node.next = cur.next.next;
  }

  // Add new node after specified node
  insertAfter(targetVal, newVal) {
    let node = new Node(newVal);
    if (this.includes(targetVal) === false) {
      console.log("Could not find value - adding to HEAD");
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
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    return this.top === null ? null : this.top.value;
  }

  isEmpty() {
    return this.top === null ? true : false;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.end = node;
    } else {
      let cur = this.front;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
      this.end = node;
    }
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    return this.front === null ? null : this.front.value;
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

class PseudoQueue extends Stack {
  constructor() {
    super();
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this.stack1;
  }

  dequeue() {
    if (this.stack1.top === null) {
      return 'Stack is already empty';
    } else if (this.stack1.top.next === null) {
      this.stack1.pop();
    }
    while (this.stack1.top !== null) {
      this.stack2.push(this.stack1.pop());
    }
    let remove = this.stack2.pop();
    while (this.stack2.top !== null) {
      this.stack1.push(this.stack2.pop());
    }
    return remove;
  }
}

class AnimalShelter extends Queue {
  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat" ) {
      return null;
    }
    if (this.front === null) {
      return 'empty queue';
    } else {
      let current = this.front;
      let pre = {};
      while (pref !== current.value.species){
        pre = current;
        current = current.next;
      }
      pre.next = current.next;
      current.next = null;
      return current.value.species;
    }
  }
}

const validateBrackets = (value) => {
  let splitVal = value.split('');
  const round = ['(',')'];
  const curly = ['{','}'];
  const square = ['[',']'];
  
};




module.exports = {
  LinkedList,
  Stack,
  Queue,
  PseudoQueue,
  AnimalShelter,
  ValidateBrackets,
};
