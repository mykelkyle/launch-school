document.addEventListener("DOMContentLoaded", () => {
  let item1 = {
    name: "toy",
    quantity: 20,
    price: 100,
  };
  let item2 = {
    name: "ball",
    quantity: 15,
    price: 17,
  };

  let obj = {
    items: [item1, item2],
  };

  // templates
  let productsList = Handlebars.compile(
    document.getElementById("productsList").innerHTML
  );
  let productTemplate = Handlebars.compile(
    document.getElementById("productTemplate").innerHTML
  );

  // register partial
  Handlebars.registerPartial("productTemplate", productTemplate);

  let div = document.createElement("div");
  div.innerHTML = productsList(obj);
  document.body.appendChild(div);

  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    let fd = new FormData(form);
    let request = new XMLHttpRequest();

    request.open("POST", "http://httpbin.org/post");
    request.addEventListener("load", () => {
      console.log(request.response);
    });

    request.send(fd);
  });
});
