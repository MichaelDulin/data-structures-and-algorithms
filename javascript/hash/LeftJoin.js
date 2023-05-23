'use strict';

const leftJoin = (map1, map2) => {
  const result = [];
  for (let [key, value] of map1) {
    const matchingValue = map2.has(key) ? map2.get(key) : null;
    result.push([key, value, matchingValue]);
  }
  return result;
}

module.exports = {leftJoin};
