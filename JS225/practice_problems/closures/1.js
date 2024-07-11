const person = {
  firstName: "Rick ",
  lastName: "Sanchez",
  fullName() {
    return this.firstName + this.lastName;
  },
};

console.log(person.fullName());
