let me = {
  firstName: "Mykel",
  lastName: "Murphy",
};

let friend = {
  firstName: "John",
  lastName: "Smith",
};

let mother = {
  firstName: "Amber",
  lastName: "Doe",
};

let father = {
  firstName: "Shane",
  lastName: "Doe",
};

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

let people = [];
people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

function rollCall(collection) {
  collection.forEach(fullName);
}

people = {
  collection: [me, friend, mother, father],
  fullName: function (person) {
    console.log(person.firstName + " " + person.lastName);
  },

  rollCall: function () {
    this.collection.forEach(this.fullName);
  },

  add: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  getIndex: function (person) {
    let index = -1;
    this.collection.forEach((comparator, i) => {
      if (
        comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName
      ) {
        index = i;
      }
    });

    return index;
  },

  remove: function (person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) return;
    this.collection.splice(index, 1);
  },

  isInvalidPerson: function (person) {
    return (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string"
    );
  },

  get: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonID = this.getIndex(person);
    if (existingPersonID === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonID] = person;
    }
  },
};

people.remove();
