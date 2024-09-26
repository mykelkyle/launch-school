document.addEventListener("DOMContentLoaded", () => {
  function makeBold(element, callback) {
    callback(element);
    element.style.fontWeight = "bold";
  }

  let sectionElement = document.querySelector("section");
  makeBold(sectionElement, function (elem) {
    elem.classList.add("highlight");
  });

  console.log(sectionElement.classList.contains("highlight"));
  console.log(sectionElement.style.fontWeight);
});
