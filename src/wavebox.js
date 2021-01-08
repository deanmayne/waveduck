const CONSTANTS = {
  gravity: 0.1,
  friction: 0.99,
};

let mouse = {
  x: 0,
  y: 0,
  down: false,
};

let theme = document.getElementById("theme").value;
let num_ducks = document.getElementById("duckSlider").value;
let num_points = document.getElementById("liquidSlider").value;


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

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

canvas.addEventListener("mousedown", function (e) {
  mouse.down = true;

});

document.addEventListener("mouseup", function (e) {
  mouse.down = false;
});

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
        case "witch":
          color = "black";
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
      return;
    }

    let allObjects = [...this.ducks, ...this.points];
    for (let i = 0; i < allObjects.length; i++) {
      let object = allObjects[i];

      if (mouse.down) {
        let dx = mouse.x - object.x;
        let dy = mouse.y - object.y;
        let d = Math.sqrt(dx * dx + dy * dy);

        if (d < object.radius * 2) {
          if (d === 0) {
            d = 0.1;
          }

          object.velocity.x += dx * 0.3;
          object.velocity.y += dy * 0.3;
        }
      }

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

class Duck {
  constructor(dimensions, theme) {
    this.dimensions = dimensions;
    this.x = Math.random() * this.dimensions.width - 50;
    this.y = 0.25 * this.dimensions.height;
    this.velocity = { x: 0, y: 0 };
    this.height = 60;
    this.width = 75;
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
    if (this.x < 0) {
      this.x = 0 ;
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
      case "angel":
        duck.src = "./src/svg/AngelRubberDucky.svg";
        break;
      case "unicorn":
        duck.src = "./src/svg/UnicornRubberDucky.svg";
        break;
      case "witch":
        duck.src = "./src/svg/WitchRubberDucky.svg";
        break;
      default:
        duck.src = "./src/svg/RubberDucky.svg";
        break;
    }

    ctx.drawImage(duck, this.x, this.y, this.width, this.height);
  }
}

class Point {
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
