// let request = new XMLHttpRequest();
// request.open("POST", "https://lsjs230-book-catalog.herokuapp.com/books");

// request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

// let data = { title: "Eloquent JavaScript", author: "Marijn Haverbeke" };
// let json = JSON.stringify(data);

// request.send(json);

/*
POST /books HTTP/1.1
Host: lsjs230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8
Accept: **

{
  "title": "Eloquent JavaScript",
  "author": "Marijn Haverbeke"
}

*/

let request = new XMLHttpRequest();
request.open("POST", "https://ls-230-web-store-demo.herokuapp.com/v1/products");

request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
request.setRequestHeader("Authorization", "token AUTH_TOKEN");

request.addEventListener("load", (event) => {
  console.log(`This product was added: ${request.responseText}`);
});

let data = {
  name: "Paper Towels",
  sku: "PAP",
  price: 10.59,
};
let json = JSON.stringify(data);

request.send(json);

// function createProduct(productData) {
//   let json = JSON.stringify(productData);
//   let request = new XMLHttpRequest();

//   request.open(
//     "POST",
//     "https://ls-230-web-store-demo.herokuapp.com/v1/products"
//   );
//   request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//   request.setRequestHeader("Authorization", "token AUTH_TOKEN");

//   request.addEventListener("load", () => {
//     console.log(`This product was added: ${request.responseText}`);
//   });

//   request.send(json);
// }

// createProduct({
//   name: "HB pencil",
//   sku: "h240",
//   price: 50,
// });
