const CONSTANTS = {
    accuracy: 5,
    gravity: 4,
    friction: 0.99,
    bounce: 0.5,
    height: 1,
    width: 1,
    
}

export default class Point {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width * 0.9;
    this.y = this.dimensions.height * 0.9;
    this.v = 0;
  }

  animate(ctx) {
    this.movePoint();
    this.drawPoint(ctx);
  }

  movePoint() {
    this.y += this.v;
    this.v += CONSTANTS.gravity;
  }

  drawPoint(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);
  }

  animate(ctx){
      this.movePoint();
      this.drawPoint(ctx);
  }


}