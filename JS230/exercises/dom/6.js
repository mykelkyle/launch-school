document.addEventListener("DOMContentLoaded", () => {
  function nodesToArr(node = document.body) {
    return [node.tagName, [...node.children].map(nodesToArr)];
  }

  console.log(nodesToArr());
});
