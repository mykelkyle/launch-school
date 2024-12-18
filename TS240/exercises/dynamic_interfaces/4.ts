interface UserData {
  name: string;
  age: number;
  email: string;
}

type Keys = keyof UserData;

function printDataField(userData: UserData, key: Keys): void {
  console.log(userData[key]);
}

const userData: UserData = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

printDataField(userData, "name");
// Output should be "Alice"
printDataField(userData, "age");
// Output should be 25
