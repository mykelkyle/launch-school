function makeCar(accRate, brakeRate) {
  return {
    speed: 0,
    accRate,
    brakeRate,

    accelerate() {
      this.speed += this.accRate;
    },

    brake() {
      if (this.speed - this.brakeRate < 0) {
        this.speed = 0;
      } else {
        this.speed -= this.brakeRate;
      }
    },
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
