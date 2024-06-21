function triangle(angle1, angle2, angle3) {
  let angles = [...arguments];
  if (
    angles.reduce((acc, v) => acc + v) !== 180 ||
    angles.some((angle) => angle < 1)
  ) {
    console.log("invalid");
    return;
  }

  if (angles.some((angle) => angle === 90)) {
    console.log("right");
    return;
  } else if (!angles.some((angle) => angle >= 90)) {
    console.log("acute");
    return;
  } else {
    console.log("obtuse");
    return;
  }
}

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
