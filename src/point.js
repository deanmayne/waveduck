const CONSTANTS = {
  gravity: 0.1,
  friction: 0.99,
};

export default class Point {
  constructor(dimensions, theme, color) {
    this.dimensions = dimensions;
    this.x = Math.random() * this.dimensions.width - 10;
    this.y = (Math.random() * 0.6 + 0.4) * this.dimensions.height;
    this.velocity = { x: 0, y: 0 };
    this.radius = Math.max(Math.random() * 20, 5);
    this.theme = theme;
    this.color = color;
  }

  animate(ctx) {
    this.move();
    this.draw(ctx);
  }

  move() {
    this.velocity.y += CONSTANTS.gravity;
    this.velocity.x *= CONSTANTS.friction;
    this.velocity.y *= CONSTANTS.friction;

    if (this.velocity.x >= 3) {
      this.velocity.x = 3;
    } else if (this.velocity.x <= -3) {
      this.velocity.x = -3;
    }

    if (this.velocity.y >= 3) {
      this.velocity.y = 3;
    } else if (this.velocity.y <= -3) {
      this.velocity.y = -3;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.y > this.dimensions.height - this.radius) {
      this.y = this.dimensions.height - this.radius;
      this.velocity.y = -Math.abs(this.velocity.y);
    }
    if (this.y < this.radius) {
      this.y = this.radius;
      this.velocity.y = Math.abs(this.velocity.y);
    }
    if (this.x > this.dimensions.width - this.radius) {
      this.x = this.dimensions.width - this.radius;
      this.velocity.x = -Math.abs(this.velocity.x);
    }
    if (this.x < this.radius) {
      this.x = this.radius;
      this.velocity.x = Math.abs(this.velocity.x);
    }
  }

  draw(ctx) {

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    
  }


}
