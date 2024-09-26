document.addEventListener("DOMContentLoaded", () => {
  function countNodes(node) {
    let count = node.childNodes.length;
    Array.prototype.slice.call(node.childNodes).forEach((child) => {
      count += countNodes(child);
    });

    return count;
  }

  function childNodes(id) {
    let parent = document.getElementById(id);

    let direct = parent.childNodes.length;
    let indirect = countNodes(parent) - direct;

    return [direct, indirect];
  }

  console.log(childNodes(1));
});
