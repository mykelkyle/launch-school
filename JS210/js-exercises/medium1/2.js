let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// no, because the increment else branch doesn't execute when i is divisble by 3. the loop will continue infinitely.
