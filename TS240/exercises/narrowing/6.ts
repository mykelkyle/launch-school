function logUnknown(arg: unknown): void {
  typeof arg === "string" && console.log(arg);
}

logUnknown("this is a string");
logUnknown(3);
