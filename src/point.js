const CONSTANTS = {
  gravity: 0.4,
  friction: .99,
  height: 10,
  width: 10,
};


export default class Point {
  constructor(dimensions, theme, color) {
    this.dimensions = dimensions;
    this.x = Math.random() * this.dimensions.width-10;
    this.y = (Math.random()*0.6+0.4) * this.dimensions.height;
    this.velocity = { x: 0, y: 0 };
    this.radius = Math.max(Math.random() * 10,5);
    this.color = color;
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
    
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    
    if(this.y > this.dimensions.height - this.radius){
      this.y = this.dimensions.height - this.radius;
      this.velocity.y = - Math.abs(this.velocity.y);
    } 
    if(this.y < this.radius){
      this.y = this.radius;
      this.velocity.y = Math.abs(this.velocity.y);
    } 
    if(this.x > this.dimensions.width - this.radius){
      this.x = this.dimensions.width - this.radius;
      this.velocity.x = -Math.abs(this.velocity.x);
    }
    if(this.x < this.radius){
      this.x = this.radius;
      this.velocity.x = Math.abs(this.velocity.x);
    }
    

  }

  draw(ctx) {
      let color = "";
        switch (this.theme) {
          case "french":
            color = this.color;
            break;
            case "devil":
            color = this.color;
            break;
          default:
            color = "blue";
            break;
        }


    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  }

  outOfBounds() {
    return (
      this.y > this.dimensions.height - 10 || this.x > this.dimensions.width
    );
  }
}
