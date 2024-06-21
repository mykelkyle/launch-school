function slice(arr, begin, end) {
  let resultArr = [];

  for (let i = begin; i < end; i++) {
    if (arr[i] === undefined) {
      break;
    } else {
      resultArr.push(arr[i]);
    }
  }

  console.log(resultArr);
}

function splice(arr, start, deleteCount) {
  if (start > arr.length) start = arr.length;
  if (deleteCount > deleteCount - start) deleteCount = deleteCount - start;
  let deleted = [];

  for (let i = start; i < deleteCount; i++) {}

  console.log(deleted);
}

splice([1, 2, 3], 1, 2); // [2, 3]
splice([1, 2, 3], 1, 3); // [2, 3]
splice([1, 2, 3], 1, 0); // []
splice([1, 2, 3], 0, 1); // [1]
splice([1, 2, 3], 1, 0, "a"); // []

// const arr2 = [1, 2, 3];
// splice(arr2, 1, 1, "two"); // [2]
// arr2; // [1, "two", 3]

// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, "two", "three"); // [2, 3]
// arr3; // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0); // []
// splice(arr4, 1, 0, "a"); // []
// arr4; // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, "a"); // []
// arr5; // ["a", 1, 2, 3]
