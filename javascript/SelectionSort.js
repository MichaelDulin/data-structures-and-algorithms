'use strict';

const selectionSort = (arr) => {
  if (arr.length <= 1) return arr;
  let length = arr.length;
  for (let i = 0; i < length; i++){
    let min = arr[i];
    for(let cur = 0; cur < length; cur++){
      let next = arr[cur + 1];
      if (arr[next] < arr[min]){
        min = next;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
