function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.species = "Lupis";
Dog.showSpecies = function () {
  console.log(`Dogs belong to the species ${this.species}`);
};

Dog.showSpecies();
