interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const myEmployee: Employee = {
  name: "Mykel",
  age: 25,
  employeeId: 76840317,
};
