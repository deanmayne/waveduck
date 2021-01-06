const CONSTANTS = {
  accuracy: 5,
  gravity: 0.2,
  friction: 0.99,
  bounce: 0.5,
  height: 40,
  width: 50,
};

export default class Duck {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = Math.min(Math.random() * this.dimensions.width,this.dimensions.width-50);
    this.y = 0.25 * this.dimensions.height;
    this.v = 0;
  }

  animate(ctx) {
    this.move();
    this.draw(ctx);
  }

  move() {
    if (this.y >= this.dimensions.height - CONSTANTS.height) {
      this.y = this.dimensions.height - CONSTANTS.height;
    } else {
        this.y += this.v;
        this.v += CONSTANTS.gravity;
    }
  }

  draw(ctx) {
    const duck = new Image();
    duck.src = "FrenchRubberDucky.svg";
    ctx.drawImage(duck, this.x, this.y, CONSTANTS.width, CONSTANTS.height);
  }

  outOfBounds() {
    return this.y > this.dimensions.height - 40 || this.x > this.dimensions.width
  }
}
