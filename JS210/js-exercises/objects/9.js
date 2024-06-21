function timeOfDay(changeMinutes) {
  let day = new Date(0);
  day.setMinutes(changeMinutes);
  const hours = String(day.getUTCHours()).padStart(2, "0");
  const minutes = String(day.getMinutes()).padStart(2, "0");
  console.log(`${hours}:${minutes}`);
}

// timeOfDay(0); // "00:00"
// timeOfDay(-3); // "23:57"
// timeOfDay(35); // "00:35"
// timeOfDay(-1437); // "00:03"
timeOfDay(3000); // "02:00"
// timeOfDay(800); // "13:20"
// timeOfDay(-4231); // "01:29"
