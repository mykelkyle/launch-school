function filterByType<T>(arr: any[], filter: string): T[] {
  return arr.filter((el) => typeof el === filter);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));
