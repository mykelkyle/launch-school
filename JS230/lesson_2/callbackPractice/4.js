function waterfallOverCallbacks(cbArr, arg) {
  cbArr.forEach((cb) => {
    arg = cb(arg);
  });

  console.log(arg);
}

const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
