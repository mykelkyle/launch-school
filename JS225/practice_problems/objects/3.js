function objectsEqual(obj1, obj2) {
  for (property in obj1) {
    if (!Object.keys(obj2).includes(property)) return false;
    if (obj1[property] !== obj2[property]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false
