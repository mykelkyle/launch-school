function range(...args) {
  let start;
  let end;

  if (args.length === 1) {
    start = 0;
    end = args[0];
  } else {
    start = args[0];
    end = args[1];
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
