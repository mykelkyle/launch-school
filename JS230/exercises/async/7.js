function delegateEvent(parentEl, selector, eventType, callback) {
  if (!parentEl) {
    console.log(undefined);
    return;
  }

  parentEl.addEventListener(eventType, (e) => {
    if (e.target.tagName === selector.toUpperCase()) {
      callback({ target: e.target, currentTarget: e.currentTarget });
    }
  });

  console.log(true);
}

document.addEventListener("DOMContentLoaded", () => {
  // Possible elements for use with the scenarios
  const element1 = document.querySelector("table");
  const element2 = document.querySelector("main h1");
  const element3 = document.querySelector("main");

  // Possible callback for use with the scenarios
  const callback = ({ target, currentTarget }) => {
    console.log(target, currentTarget);
    alert(
      `Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`
    );
  };

  delegateEvent(element3, "aside p", "click", callback);
});
