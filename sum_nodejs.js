// Sum of n numbers in Node.js

function sumNumbers(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// Example input
const input = [1, 2, 3];
const result = sumNumbers(input);

console.log(result); // Output: 6