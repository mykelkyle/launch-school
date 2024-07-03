function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let sentence;
      if (visited) {
        sentence = `I have visited ${this.name}.`;
      } else {
        sentence = `I haven't visited ${this.name}.`;
      }
      return this.name + " is located in " + this.continent + ". " + sentence;
    },
    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry("The Republic of Chile", "South America");
let canada = makeCountry("Canada", "North America");
let southAfrica = makeCountry("The Republic of South Africa", "Africa");

console.log(canada.getDescription());
