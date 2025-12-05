const nums = [1, 4, 6, 9, 10, 13, 14];
let evenCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenCount++;
  }
}

console.log(evenCount);
