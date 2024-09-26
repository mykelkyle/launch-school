document.addEventListener("DOMContentLoaded", () => {
  function nodeSwap(id1, id2) {
    const div1 = document.getElementById(id1);
    const div2 = document.getElementById(id2);

    if (
      !div1 ||
      !div2 ||
      div1.parentElement === div2 ||
      div2.parentElement === div1
    ) {
      return undefined;
    }

    const div1Clone = div1.cloneNode(true);
    const div2Clone = div2.cloneNode(true);
    const div1Parent = div1.parentNode;
    const div2Parent = div2.parentNode;

    div1Parent.replaceChild(div2Clone, div1);
    div2Parent.replaceChild(div1Clone, div2);
    return true;
  }

  console.log(nodeSwap(3, 1));
  nodeSwap(7, 9);
});
