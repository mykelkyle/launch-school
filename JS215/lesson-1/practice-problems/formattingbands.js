function processBands(data) {
  return data.map((band) => {
    return {
      name: formatName(band.name),
      country: "Canada",
      active: band.active,
    };
  });
}

function formatName(str) {
  let formatted = str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  return formatted
    .split("")
    .filter((char) => {
      return char === " " || /[a-z]/i.test(char);
    })
    .join("");
}

let bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true },
];

console.log(processBands(bands));
console.log(bands);
