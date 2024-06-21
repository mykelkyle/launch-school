function halvsies(arr) {
  let newArr = [[], []];

  let firstHalf = Math.round(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (i < firstHalf) {
      newArr[0].push(arr[i]);
    } else {
      newArr[1].push(arr[i]);
    }
  }

  console.log(newArr);
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
