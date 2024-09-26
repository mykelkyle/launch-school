document.addEventListener("DOMContentLoaded", () => {
  const divBlue = document.getElementById("blue");
  const divRed = document.getElementById("red");
  const divOrange = document.getElementById("orange");
  const divGreen = document.getElementById("green");
  const tracker = (() => {
    const events = [];
    return {
      list() {
        return events.slice();
      },
      elements() {
        return this.list().map(({ target }) => target);
      },
      add(event) {
        events.push(event);
      },
      clear() {
        events.length = 0;
        return events.length;
      },
    };
  })();

  function track(callback) {
    function isEventTracked(events, event) {
      return events.includes(event);
    }

    return (event) => {
      if (!isEventTracked(tracker.list(), event)) {
        tracker.add(event);
      }

      callback(event);
    };
  }

  divRed.addEventListener(
    "click",
    track((event) => {
      document.body.style.background = "red";
    })
  );

  divBlue.addEventListener(
    "click",
    track((event) => {
      event.stopPropagation();
      document.body.style.background = "blue";
    })
  );

  divOrange.addEventListener(
    "click",
    track((event) => {
      document.body.style.background = "orange";
    })
  );

  divGreen.addEventListener(
    "click",
    track((event) => {
      document.body.style.background = "green";
    })
  );
});
