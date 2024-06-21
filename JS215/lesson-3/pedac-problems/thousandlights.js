/*
PROBLEM
  - Take an integer that represents the number of times the lights will be switched.
  - The integer also represents the number of lights
  - eg n = 7 => [1, 2, 3, 4, 5, 6, 7] AND 7 iterations
  - Important to note that the first iteration (round 1) will always be ALL lights ON
INPUT
  - An integer
OUTPUT
  - An array consisting of all the lights that are "ON"

RULES
  - For the first iteration, all lights will be ON
  - For every successive iteration, flip the switches that are factors of N
    - eg n = 10 and it is the second iteration => (2, 4, 6, 8, 10) are all switched off now
  - argument will always be a number
  - number will always be positive

DATA STRUCTURES
 - Initialize an array up to length n

ALGORITHM
  - Initialize an array
  - Set its length property to n

  - Start from 1 and iteratate up till n

  - Create a nested loop to go through each element
    - On first iteration, change all elements to true
      - For each iteration after
      - If the inner index is disible by the outer index,
        - Change the elements value to its opposite
        - eg if true, change to false, if false, change to true


  - Then, map the array, if the value is true, change to its index
  - If false, return undefined
  - Chain a filter, return only elements that are not undefined
  return the resulting array of indexes
  [1, 2, 3, 4, 5] n = 5
  arr = [x, x, x, x, x]

*/

function lightsOn(switches) {
  let lights = [];
  lights.length = switches;
  lights.fill(true);

  for (let rounds = 2; rounds < switches + 1; rounds++) {
    lights.forEach((light, lightIndex) => {
      if ((lightIndex + 1) % rounds === 0) {
        lights[lightIndex] = !light;
      }
    });
  }

  return lights
    .map((light, index) => {
      if (light === true) {
        return index + 1;
      } else {
        return undefined;
      }
    })
    .filter((light) => light !== undefined);
}

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
