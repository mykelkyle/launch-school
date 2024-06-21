function fibonacci(n) {
  let fibSequence = [1, 1];
  let count = 2;

  while (count < n) {
    let next = fibSequence[0] + fibSequence[1];
    fibSequence.push(next);
    fibSequence.shift();
    count++;
  }

  console.log(fibSequence[1]);
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050
