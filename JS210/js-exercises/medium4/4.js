function fridayThe13ths(y) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let friCount = 0;

  for (let i = 0; i < 12; i++) {
    let date = new Date(y, i, 13);
    if (days[date.getDay()] === "Fri") {
      friCount++;
    }
  }

  console.log(friCount);
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
