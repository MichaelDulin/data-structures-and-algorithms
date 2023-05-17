'use strict';

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  let sorted = [];
  while(left.length && right.length) {
    left[0] < right[0] ? sorted.push(left.shift()) : sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
};

let test = [2, 5, 3, 7, 11, 1, 10, -2];
let result = [-2, 1, 2, 3, 5, 7, 10, 11];
console.log(`IN: ${test}`);
console.log(`EXPECT: ${result}  ||  OUT: ${mergeSort(test)}`);
