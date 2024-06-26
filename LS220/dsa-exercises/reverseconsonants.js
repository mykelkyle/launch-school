/*
Reverse Consonants
Given a string str, reverse only all the consonants in the string and return it. Consonants are all alphabetic characters except for the vowels 'a', 'e', 'i', 'o', and 'u', which can appear in both lower and upper cases. The consonants can appear more than once in the string.

where do start pointer begin? when do we move this pointer?
where does end pointer begin? when do we move this pointer?
when do we cease iteration
example => elapmxe
hello => le
starter is at h,
end is at o
=>
end decrements because o is a vowel
end is at l
swap start and end
increment start and decrement end
start is at e
end is at l
increment start
start is at l
end is at l
swap
if starter is greter than end, stop iteration

*/

function reverseConsonants(str) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let start = 0;
  let end = str.length - 1;
  str = str.split("");

  while (start < end) {
    if (!VOWELS.includes(str[start]) && !VOWELS.includes(str[end])) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    } else if (VOWELS.includes(str[start])) {
      start++;
    } else {
      end--;
    }
  }

  return str.join("");
}

// Example test cases

console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
