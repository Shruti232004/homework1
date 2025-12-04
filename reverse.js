// Reverse numbers using loop in Node.js

function reverseNumbers(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example input
const input = [1, 2, 3];
const result = reverseNumbers(input);

console.log(result.join(" ")); // Output: 3 2 1