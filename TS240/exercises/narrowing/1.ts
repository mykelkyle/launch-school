function printLength(arg: string | string[]): void {
  if (typeof arg === "string") {
    console.log("String length: " + arg.length);
  } else if (Array.isArray(arg)) {
    console.log("Array count: " + arg.length);
  }
}

printLength("hello");
printLength(["hello", "world"]);
