function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let indexToDelete = items.indexOf(item);
      items.splice(indexToDelete, 1);
      console.log(`${item} removed!`);
    },

    list() {
      items.forEach((item) => console.log(item));
    },
  };
}

let list = makeList();
list.add("peas");
// peas added!
list.list();
// peas
list.add("corn");
// corn added!
list.list();
// peas
// corn
list.remove("peas");
// peas removed!
list.list();
// corn
console.log(list.items);
