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

  includes(val){
    let cur = this.head;
    while(cur !== null){
      if (cur.data === val) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  toString(){
    let cur = this.head;
    let returnStr = ' ';
    while (cur !== null) {
      returnStr += `{ ${cur.data} } -> `;
      cur = cur.next;
    }
    return returnStr += 'NULL';
  }
}


module.exports = LinkedList;
