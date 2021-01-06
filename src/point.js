const CONSTANTS = {
  accuracy: 5,
  gravity: 0.2,
  friction: 0.99,
  bounce: 0.5,
  height: 10,
  width: 10,
};

export default class Point {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = Math.random() * this.dimensions.width-10;
    this.y = (Math.random()*0.6+0.4) * this.dimensions.height;
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
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);
  }

  outOfBounds() {
    debugger;
    return (
      this.y > this.dimensions.height - 10 || this.x > this.dimensions.width
    );
  }
}
