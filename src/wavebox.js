import Duck from "./duck.js";
import Point from "./point.js";

let mouse = {
  x: 0,
  y: 0,
  down: false,
};

let theme = document.getElementById("theme").value;
let num_ducks = document.getElementById("duckSlider").value;
let num_points = document.getElementById("liquidSlider").value;

export default class WaveBox {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.load();
  }

  load() {
    this.points = [];
    for (let i = 0; i < num_points; i++) {
      let color = "";
      switch (theme) {
        case "french":
          color = ["blue", "white", "red"][Math.floor(Math.random() * 3)];
          break;
        case "devil":
          color = "red";
          break;
        case "angel":
          color = "white";
          break;
        case "unicorn":
          color = "pink";
          break;
        default:
          color = "blue";
          break;
      }
      this.points.push(new Point(this.dimensions, theme, color));
      this.points[i].draw(this.ctx);
    }
    this.ducks = [];
    for (let i = 0; i < num_ducks; i++) {
      this.ducks.push(new Duck(this.dimensions, theme));
      this.ducks[i].draw(this.ctx);
    }

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (
      this.ducks[0].theme !== theme ||
      this.ducks.length != num_ducks ||
      this.points.length != num_points
    ) {
      this.load();
      return
    }

    let allObjects = [...this.ducks, ...this.points];
    for (let i = 0; i < allObjects.length; i++) {
      let object = allObjects[i];

      object.animate(this.ctx);

      for (let j = 0; j < allObjects.length; j++) {
        if (i === j) {
          continue;
        }
        let object2 = allObjects[j];
        let dx = object2.x - object.x;
        let dy = object2.y - object.y;
        let d = Math.sqrt(dx * dx + dy * dy);

        if (d < object.radius || d < object.height) {
          if (d === 0) {
            d = 0.1;
          }
          let unitX = dx / d;
          let unitY = dy / d;

          let force = -0.1;

          let forceX = unitX * force * 0.3;
          let forceY = unitY * force * 0.3;
          object.velocity.x += forceX;
          object.velocity.y += forceY;

          object2.velocity.x -= forceX;
          object2.velocity.y -= forceY;
        }
        j++;
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

// canvas.addEventListener("mousemove", function (e) {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// canvas.addEventListener("mousedown", function (e) {
//   mouse.down = true;
//   mouse.x = e.x;
//   mouse.y = e.y;

//   for (i = 0; i < allObjects.length; i++) {
//     let allObjects = allObjects[i];
//     let dx = mouse.x - allObjects.x;
//     let dy = mouse.y - allObjects.y;
//     let d = Math.sqrt(dx * dx + dy * dy);

//     if (d < radius) {
//       allObjectsUnderMouse = allObjects;
//       break; // break (stop) the for loop
//     }
//   }
// });

// canvas.addEventListener("mouseup", function (e) {
//   mouse.down = false;
// });

let dropdown = document.getElementById("theme");
dropdown.addEventListener("change", function () {
  theme = dropdown.value;
});

let duckSlider = document.getElementById("duckSlider");
duckSlider.addEventListener("change", function () {
  num_ducks = duckSlider.value;
});

let liquidSlider = document.getElementById("liquidSlider");
liquidSlider.addEventListener("change", function () {
  num_points = liquidSlider.value;
});
