# WaveDuck
[WaveDuck](https://deanmayne.github.io/waveduck/) is a digital rendition on the classic "wave box" featuring themed ducks !

![WaveDuck](https://github.com/deanmayne/waveduck/blob/gh-pages/Sharelink.png)

## Technologies
1. HTML5 Canvas
2. CSS3
3. Javascript

## Animations

Each object in the HTML canvas has its physical motions calculated individually and in real time.

```javascript

let mouse = {
  x: 0,
  y: 0,
  down: false,
};

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
  }
  
  ```
  
