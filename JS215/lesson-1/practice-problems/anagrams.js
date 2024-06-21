function anagram(word, list) {
  return list.filter((candidate) => areAnagrams(candidate, word));
}

function areAnagrams(candidate, word) {
  return compareArrays(candidate.split("").sort(), word.split("").sort());
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let areEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      areEqual = false;
    }
  }

  return areEqual;
}

console.log(anagram("listen", ["enlists", "google", "inlets", "banana"])); // [ "inlets" ]
console.log(anagram("listen", ["enlist", "google", "inlets", "banana"])); // [ "enlist", "inlets" ]
