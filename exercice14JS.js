const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((n) => n * 2);
const even = doubled.filter((n) => n % 2 === 0);
const total = even.reduce((sum, val) => sum + val, 0);

let arrRefactored = arr
  .map((n) => n * 2)
  .filter((n) => n % 2 === 0)
  .reduce((sum, val) => sum + val, 0);
