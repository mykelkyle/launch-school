function checkGoldbach(int) {
  if (int % 2 === 1 || int < 4) return null;
  let primes = [];

  for (let i = 1; i < int; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  sums = [];

  for (let i = 0; i < primes.length; i++) {
    primes.forEach(function (n) {
      if (primes[i] + n === int && !sums.includes(n)) {
        sums.push(primes[i], n);
      }
    });
  }

  return sums;
}

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

console.log(checkGoldbach(3)); // null
console.log(checkGoldbach(4)); // 2 2
console.log(checkGoldbach(12)); // 5 7
console.log(checkGoldbach(100)); // 3 97, 11 89, 17 83, 29 71, 41 59, 47 53
