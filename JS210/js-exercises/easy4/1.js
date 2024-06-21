const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) *
      SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(
    seconds
  )}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? `0${numString}` : numString;
}
