function bubbleSort(arr) {
  let noSwaps = false;

  while (!noSwaps) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      } else {
        count += 1;
      }

      if (count === arr.length - 1) {
        noSwaps = true;
      }
    }
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

const array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
