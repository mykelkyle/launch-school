let isPrime = (int) => {
  if (int <= 1) return false;

  let primes = [];
  for (let i = 1; i <= int; i++) {
    if (int % i === 0) {
      primes.push(i);
    }
  }

  if (primes.length > 2) {
    return false;
  } else {
    return true;
  }
};

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) === false);
