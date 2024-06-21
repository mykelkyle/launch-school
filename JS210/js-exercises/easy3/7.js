function runningTotal(arr) {
  // let newArr = [];
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  //   newArr.push(sum);
  // }

  // console.log(newArr);

  let sum = 0;
  arr = arr.map((num) => {
    sum += num;
    return sum;
  });

  console.log(arr);
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
