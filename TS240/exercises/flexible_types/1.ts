function wrapInArray<T extends string | number>(val: T): T[] {
  return [val];
}
