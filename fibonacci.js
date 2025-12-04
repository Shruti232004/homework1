// Fibonacci series in Node.js

function fibonacci(n) {
  let series = [0, 1]; // starting values

  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

// Example: input = 5
const input = 5;
const result = fibonacci(input);
console.log(result.join(" ")); // Output: 0 1 1 2 3 5