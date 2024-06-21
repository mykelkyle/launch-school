function logMultiples(number) {
  for (let i = 100; i > 1; i--) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);
