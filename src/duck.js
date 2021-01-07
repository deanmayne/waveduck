const CONSTANTS = {
  gravity: 0.1,
  friction: 0.99,
};

export default class Duck {
  constructor(dimensions, theme) {
    this.dimensions = dimensions;
    this.x = Math.random() * this.dimensions.width - 50;
    this.y = 0.25 * this.dimensions.height;
    this.velocity = { x: 0, y: 0 };
    this.height = 40;
    this.width = 50;
    this.radius = this.width;
    this.theme = theme;
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

    this.y += this.velocity.y;
    this.x += this.velocity.x;

    if (this.y > this.dimensions.height - this.height) {
      this.y = this.dimensions.height - this.height;
      this.velocity.y = -Math.abs(this.velocity.y);
    }
    if (this.y < this.height) {
      this.y = this.height;
      this.velocity.y = Math.abs(this.velocity.y);
    }
    if (this.x > this.dimensions.width - this.width) {
      this.x = this.dimensions.width - this.width;
      this.velocity.x = -Math.abs(this.velocity.x);
    }
    if (this.x < this.width) {
      this.x = this.width;
      this.velocity.x = Math.abs(this.velocity.x);
    }
  }

  draw(ctx) {
    const duck = new Image();
    switch (this.theme) {
      case "french":
        duck.src = "./src/svg/FrenchRubberDucky.svg";
        break;
      case "devil":
        duck.src = "./src/svg/DevilRubberDucky.svg";
        break;
      default:
        duck.src = "./src/svg/RubberDucky.svg";
        break;
    }

    ctx.drawImage(duck, this.x, this.y, this.width, this.height);
  }


}
