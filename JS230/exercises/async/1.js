function callback1() {
  console.log("callback1");
}

function callback2() {
  console.log("callback2");
}

function callback3() {
  console.log("callback3");
}

function randomizer(...callbacks) {
  let max = callbacks.length * 2;
  let seconds = 0;

  const timeLogger = setInterval(() => {
    seconds++;
    console.log(seconds);

    if (seconds >= max) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach((callback) => {
    const executeTime = Math.floor(Math.random() * max * 1000);
    setTimeout(callback, executeTime);
  });
}

randomizer(callback1, callback2, callback3);
