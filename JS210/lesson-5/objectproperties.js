// function objectHasProperty(obj, str) {
//   let properties = Object.keys(obj);

//   console.log(properties.includes(str));
// }

// let pets = {
//   cat: "Simon",
//   dog: "Dwarf",
//   mice: null,
// };

// objectHasProperty(pets, "dog"); // true
// objectHasProperty(pets, "lizard"); // false
// objectHasProperty(pets, "mice"); // true

// function incrementProperty(obj, str) {
//   if (obj[str]) {
//     obj[str] += 1;
//   } else {
//     obj[str] = 1;
//   }

//   console.log(obj[str]);
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// incrementProperty(wins, "susie"); // 5
// console.log(wins); // { steve: 3, susie: 5 }
// incrementProperty(wins, "lucy"); // 1
// console.log(wins);

// function copyProperties(obj1, obj2) {
//   let properties = Object.keys(obj1);

//   for (let i = 0; i < properties.length; i++) {
//     obj2[properties[i]] = obj1[properties[i]];
//   }

//   console.log(properties.length);
// }

// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// copyProperties(hal, sal); // 2
// console.log(sal); // { model: 9000, enabled: true }

function wordCount(str) {
  words = str.split(" ");
  let count = {};

  words.forEach((word) => {
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  });

  console.log(count);
}

wordCount("box car cat bag box"); // { box: 2, car: 1, cat: 1, bag: 1 }

// to deep copy
// let arr = [{ b: "foo" }, ["bar"]];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);
