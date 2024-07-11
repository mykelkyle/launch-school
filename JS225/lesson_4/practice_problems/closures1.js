// function makeCounterLogger(num) {
//   return function (target) {
//     if (target > num) {
//       for (let i = num; i <= target; i++) {
//         console.log(i);
//       }
//     } else {
//       for (let i = num; i >= target; i--) {
//         console.log(i);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
// countlog(2);
// // 5
// // 4
// // 3
// // 2

function makeList() {
  let todoList = [];

  return function (task) {
    if (task !== undefined) {
      if (todoList.includes(task)) {
        let indexToDelete = todoList.indexOf(task);
        todoList.splice(indexToDelete, 1);
        console.log(`${task} removed!`);
        return;
      } else {
        todoList.push(task);
        console.log(`${task} added!`);
        return;
      }
    }

    if (Object.keys(todoList).length === 0) {
      console.log("The list is empty.");
    } else {
      todoList.forEach((todo) => console.log(todo));
    }
  };
}

let list = makeList();
list();
// The list is empty.
list("make breakfast");
// make breakfast added!
list("read book");
// read book added!
list();
// make breakfast
// read book
list("make breakfast");
// make breakfast removed!
list();
// read book
