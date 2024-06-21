function myReduce(array, func, initial) {
  let acc = initial || arr[0];

  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i]);
  }

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest)); // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10)); // 49
