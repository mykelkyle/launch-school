function century(year) {
  year = String(year);

  if (year.length < 3) {
    console.log("1st");
  }
  if (year.length === 3) {
    let century = year.slice(0, 1);
    let decade = year.slice(1, year.length);
    let result = determineCentury(century, decade);

    console.log(result[0] + result[1]);
  }

  if (year.length === 4) {
    let century = year.slice(0, 2);
    let decade = year.slice(2, year.length);
    let result = determineCentury(century, decade);

    console.log(result[0] + result[1]);
  }
}

function determineCentury(century, decade) {
  let suffix;
  let prefix;

  if (Number(decade[1]) > 0) {
    prefix = Number(century) + 1;
  } else {
    prefix = century;
  }

  if (Number(decade[1]) === 1) {
    suffix = "st";
  } else if (decade[1] === 2) {
    suffix = "nd";
  } else if (decade[1] === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return [String(prefix), String(suffix)];
}

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
// century(5); // "1st"
// // century(10103); // "102nd"
// century(1052); // "11th"
// century(1127); // "12th"
// // century(11201); // "113th"
