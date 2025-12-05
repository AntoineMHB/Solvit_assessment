const numbers = [2, 5, 8, 10, 3];
let valuesLessThan10 = [];
let sortedArray = [];
let temp;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;

  if (numbers[i] < 10) {
    valuesLessThan10.push(numbers[i]);
  }
}

valuesLessThan10 = valuesLessThan10.sort((a, b) => b - a);

console.log(numbers);
console.log(valuesLessThan10);
