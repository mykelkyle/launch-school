"use strict";
function filterByType(arr, filter) {
    return arr.filter((el) => typeof el === filter);
}
console.log(filterByType(["hello", "world", 42, true], "string"));
