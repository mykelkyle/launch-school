function firstElement<T extends any[]>(arr: T): T[0] | undefined {
  return arr[0];
}

const result1 = firstElement(["7", "8", 11]);
const result2 = firstElement([]);
