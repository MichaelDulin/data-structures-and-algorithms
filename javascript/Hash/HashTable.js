'use strict';

const LinkedList = require('../LinkedList/LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    // String to Number using ascii
    let sum = 0;
    for (let idx in key) {
      sum += key.charCodeAt(idx);
    }
    return (sum * 769) % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    if (!this.buckets[position]) {
      this.buckets[position] = new LinkedList();
    }
    let entry = {[key]: value};
    this.buckets[position].add(entry);
  }

  /**
   * @param {string} key
   */
  get(key) {
    let intKey = this.hash(key);
    return this.buckets[intKey];
  }

  has(key){
    let intKey = this.hash(key);
    if(this.buckets[intKey]){
      return true;
    }
    return false;
  }

  keys(){
    let str = '';
    for(let i in this.buckets){
      if(this.buckets[i]){
        str = str+ ' '+ i;
      }
    }
    return str;
  }
}

module.exports = {HashTable};
