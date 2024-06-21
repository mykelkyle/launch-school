function twice(int) {
  let str = String(int);
  let firstHalf = str.slice(0, str.length / 2);
  let secondHalf = str.slice(str.length / 2, str.length);

  if (firstHalf === secondHalf) {
    console.log(int);
  } else {
    console.log(int * 2);
  }
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
