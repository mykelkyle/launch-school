function basicCallback(callback, num) {
  setTimeout(() => {
    callback(num);
  }, 2000);
}

basicCallback((num) => {
  console.log(num * 2);
}, 10);
