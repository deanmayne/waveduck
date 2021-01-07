import WaveBox from './wavebox.js';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  let num_ducks = 4;
//   let num_points = canvas.width * canvas.height * 0.004;
  let num_points = 1000;
//   let theme = "devil"
  new WaveBox(canvas, num_points, num_ducks);

});

