document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const quantInput = document.getElementById("quantity");
  const groceryList = document.getElementById("grocery-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = nameInput.value;
    let quantity = quantInput.value || "1";
    let newNode = document.createElement("li");
    newNode.textContent = `${quantity} ${name}`;
    groceryList.appendChild(newNode);

    clearForm();
  });

  function clearForm() {
    nameInput.value = "";
    quantInput.value = "";
  }
});
