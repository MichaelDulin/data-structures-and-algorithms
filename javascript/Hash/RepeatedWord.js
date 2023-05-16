'use strict';

const HashTable = require('./HashTable');

const firstDuplicate = (str) => {
  let temp = newStr.replace(/\W/g, '').split(' ');
  for (let i = 0; i < temp.length; i++){
    if (map[temp[i]]){
      return temp[i];
    }
    map[temp[i]] = 1;
  }
  return 'no match found';
}

module.exports = {firstDuplicate};
