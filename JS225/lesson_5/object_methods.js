function newPerson(name) {
  return Object.defineProperties(
    { name: name },
    {
      log: {
        value() {
          console.log(this.name);
        },
        writable: false,
      },
    }
  );
}

let me = newPerson("Shane Riley");

me.log(); // => Shane Riley

console.log(Object.getOwnPropertyNames(me));
