document.addEventListener("DOMContentLoaded", () => {
  function sliceTree(start, end) {
    let endElement = document.getElementById(end);
    const startElement = document.getElementById(start);

    if (!startElement || !endElement) {
      return undefined;
    }

    const slicedTree = [];
    let currentElement;

    do {
      currentElement = endElement;
      slicedTree.unshift(currentElement.tagName);
      endElement = endElement.parentNode;
    } while (
      currentElement.id !== String(start) &&
      endElement.tagName !== "BODY"
    );

    return endElement.tagnName === "BODY" && currentElement.id !== String(start)
      ? undefined
      : slicedTree;
  }

  console.log(sliceTree(1, 6)); // ["ARTICLE", "HEADER", "SPAN", "A"]
});

// write a helper function to walk down DOM elements from a parent node
// if the helper function finishes without finding the target endIndex element, return undefined
