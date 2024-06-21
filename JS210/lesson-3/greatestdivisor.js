function gcd(int1, int2) {
  let divisors = [];
  let max = int1 > int2 ? int1 : int2;

  for (let i = 1; i <= max; i++) {
    if (int1 % i === 0 && int2 % i === 0) {
      divisors.push(i);
    }
  }

  console.log(Math.max(...divisors));
}

gcd(12, 4); // 4
gcd(15, 10); // 5
gcd(9, 2); // 1
