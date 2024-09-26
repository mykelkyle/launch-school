let request = new XMLHttpRequest();
request.open("GET", "http://lsjs230-book-catalog.herokuapp.com/invalid_book");
request.responseType = "json";

request.addEventListener("load", (event) => {
  if (request.response) {
    console.log(request.status);
    console.log(request.response.open_issues);
  } else {
    console.log("The request could not be completed!");
  }
});

request.send();

// request.addEventListener("error", (event) => {
//   console.log("The request could not be completed!");
// });
