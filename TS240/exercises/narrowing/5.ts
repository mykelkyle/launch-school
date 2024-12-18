// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   sideLength: number;
// };

// type Triangle = {
//   kind: "triangle";
//   side1: number;
// };

// type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     case "triangle":
//       return 1;
//     default:
//       return assertNever(shape);
//   }
// }

// function assertNever(value: never): never {
//   throw new Error("Unaccounted Type: " + value);
// }
