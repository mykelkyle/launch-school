type Device = {
  manufacturer: string;
  model: string;
  year: number;
};

const computer: Device = {
  manufacturer: "Apple",
  model: "Macbook Pro",
  year: 2020,
};

const smartphone = {
  manufacturer: "Samsung",
  model: "Galaxy Pro",
  year: 2016,
  hasHeadphoneJack: false,
};

const anotherSmartphone: Device = smartphone;
// Allowed due to structural compatibility
