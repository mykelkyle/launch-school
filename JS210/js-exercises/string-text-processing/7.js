function staggeredCase(str) {
  let count = 1;
  return str
    .split("")
    .map((v) => {
      if (/[a-z]/i.test(v)) {
        count++;
      }

      if (count % 2 === 0) {
        return v.toUpperCase();
      } else {
        return v.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase("ALL CAPS")); // "AlL cApS"
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 nUmBeRs"
