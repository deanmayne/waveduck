import Duck from "./duck.js";
import Point from "./point.js";

export default class WaveBox {
  constructor(canvas, num_points, num_ducks) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.num_points = num_points;
    this.num_ducks = num_ducks;
    this.load();
  }


  load() {
    this.points = [];
    for (let i = 0; i < this.num_points; i++) {
      this.points.push(new Point(this.dimensions));
    }
    this.ducks = [];
    for (let i = 0; i < this.num_ducks; i++) {
      this.ducks.push(new Duck(this.dimensions));
    }

    this.animate();
  }

  animate(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ducks.forEach((duck) => {
      duck.animate(ctx);
    });

    this.points.forEach((point) => {
      point.animate(ctx);
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}
