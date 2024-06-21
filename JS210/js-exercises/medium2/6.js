const languages = ["JavaScript", "Ruby", "Python"];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = "Python";
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

// ["JavaScript", "Ruby", "Python"]
// 3
// ["JavaScript", "Ruby", "Python", <empty>]
// 4
// ["JavaScript"]
// 1
// ["JavaScript", <empty>, <empty>]
// 3
// ["Javascript", <empty>, "Python"]
// undefined
// 3
