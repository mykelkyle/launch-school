let today = new Date();
// console.log(`Today's day is ${daysOfWeek[today.getDay()]}`);

function dateSuffix(day) {
  if (day === 11 || day === 12 || day === 13) {
    return String(day) + "th";
  }

  let suffix;
  let lastDigit = Number(String(day)[1]);

  switch (lastDigit) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return String(day) + suffix;
}

function formattedMonth(day) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[day.getMonth()];
}

function formattedDay(day) {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return daysOfWeek[day.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(today);
  let month = formattedMonth(date);

  console.log(`Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}`);
}

formattedDate(today);

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(dateObj) {
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  console.log(`${hours}:${minutes}`);
}

let currTime = today;
formatTime(currTime);
