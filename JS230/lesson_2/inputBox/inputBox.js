document.addEventListener("DOMContentLoaded", () => {
  const textField = document.querySelector(".text-field");
  const content = document.querySelector(".content");
  let cursorIntervalID = false;

  textField.addEventListener("click", (e) => {
    e.stopPropagation();
    textField.classList.add("focused");
    textField.classList.add("cursor");

    if (!cursorIntervalID) {
      cursorIntervalID = setInterval(() => {
        textField.classList.toggle("cursor");
      }, 500);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (textField.classList.contains("focused")) {
      let key = e.key;

      if (key === "Backspace") {
        let length = content.textContent.length;
        content.textContent = content.textContent.slice(0, length - 1);
      } else if (key.length === 1) {
        content.textContent += e.key;
      }
    }
  });

  document.addEventListener("click", () => {
    clearInterval(cursorIntervalID);
    cursorIntervalID = false;

    if (textField.classList.contains("focused")) {
      textField.classList.remove("focused");
      textField.classList.remove("cursor");
    }
  });
});
