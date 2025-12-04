const num = 2;

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

if (isPrime(num)) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}