class Point {
  static test() {
    console.log("static methods work too");
  }

  static value = 3;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  onXAxis() {
    return this.y === 0;
  }

  onYAxis() {
    return this.x === 0;
  }

  distanceToOrigin() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let pointA = new Point(30, 40);
let pointB = new Point(20);

pointA instanceof Point; // true
pointB instanceof Point; // true

pointA.distanceToOrigin(); // 50
pointB.onXAxis(); // true

Point.test();
console.log(Point.value);
