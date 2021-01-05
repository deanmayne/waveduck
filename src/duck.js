const CONSTANTS = {
    accuracy: 5,
    gravity: 4,
    friction: 0.99,
    bounce: 0.5,
    height: 30,
    width: 40,
    
}

export default class Duck {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.x = this.dimensions.width * 0.9;
        this.y = this.dimensions.height * 0.9;
        this.v = 0
    }


    animate(ctx){
        this.moveDuck();
        this.drawDuck(ctx);
    }

    moveDuck() {
    this.y += this.v;
    this.v += CONSTANTS.gravity;

  }

    drawDuck(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);
  }

  
    
}