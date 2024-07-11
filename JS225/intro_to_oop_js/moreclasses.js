// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }

//   set age(age) {
//     if (typeof age === "number" && age > 0) {
//       this.#age = age;
//     } else {
//       throw new RangeError("Age must be positive");
//     }
//   }

//   showAge() {
//     console.log(this.#age);
//   }
// }

// let person = new Person("John", 30);
// person.showAge(); // 30

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log("RangeError: Age must be positive");
// }

// class Book {
//   #title;
//   #author;
//   #year;

//   constructor(title, author, year) {
//     this.#title = title;
//     this.#author = author;
//     this.#year = year;
//   }

//   get title() {
//     return this.#title;
//   }

//   get author() {
//     return this.#author;
//   }

//   get year() {
//     return this.#year;
//   }

//   set year(newYear) {
//     if (newYear < 1900) {
//       throw new RangeError("Invalid year");
//     } else {
//       this.#year = newYear;
//     }
//   }
// }

// let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book.title); // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year); // 1925

// book.year = 1932; // Changing year
// console.log(book.year); // 1932

// // try {
// //   book.year = 1825;
// // } catch (e) {
// //   console.log(e); // RangeError: Invalid year
// // }

// try {
//   let book2 = new Book("A Tale of Two Cities", "Charles Dickents", 1959);
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

// class BankAccount {
//   #balance = 0;

//   deposit(val) {
//     this.#balance += val;
//     this.#checkBalance();
//   }

//   withdraw(val) {
//     if (this.#balance < val) {
//       throw new RangeError("Insufficient Funds");
//     } else {
//       this.#balance -= val;
//       this.#checkBalance();
//     }
//   }

//   #checkBalance() {
//     console.log(this.#balance);
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);

// account.withdraw(100); // RangeError: Insufficient funds

// class Rectangle {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(val) {
//     if (val < 1) {
//       throw new RangeError("Width must be positive");
//     } else {
//       this.#width = val;
//     }
//   }

//   set height(val) {
//     if (val < 1) {
//       throw new RangeError("Height must be positive");
//     } else {
//       this.#height = val;
//     }
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height;
//   }

//   get area() {
//     return this.#height * this.#width;
//   }
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (a === 0 || b === 0) {
      throw new RangeError("Divison by zero");
    } else {
      return a / b;
    }
  }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7)); // 42
console.log(MathUtils.divide(20, 5)); // 4
console.log(MathUtils.divide(10, 0)); // RangeError: Division by zero
