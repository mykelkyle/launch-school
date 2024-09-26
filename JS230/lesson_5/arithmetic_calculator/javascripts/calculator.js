document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("first-number");
  const input2 = document.getElementById("second-number");
  const display = document.getElementById("result");
  const operator = document.getElementById("operator");
  const form = document.querySelector("form");

  let operatorValue = operator.value;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let result;

    switch (operatorValue) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
    }

    display.textContent = String(result);
  });

  operator.addEventListener("change", () => {
    operatorValue = operator.value;
  });

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }
});
