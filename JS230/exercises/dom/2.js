document.addEventListener("DOMContentLoaded", () => {
  function domTreeTracer(id) {
    let child = document.getElementById(id);
    let parent;
    let tree = [];

    do {
      parent = child.parentNode;

      let currGen = [...child.parentElement.children].map((el) => {
        return el.tagName;
      });
      tree.push(currGen);

      child = parent;
    } while (parent.tagName !== "BODY");

    return tree;
  }

  console.log(domTreeTracer(2));
});

// start from a child element
// the initial child element and each of its siblings should be pushed onto an array
// the child should become the parent
// repeat until the parent is the body?
