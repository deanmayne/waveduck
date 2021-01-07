import WaveBox from './wavebox.js';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  let num_ducks = 1;
  let num_points = canvas.width * canvas.height * 0.004;
  new WaveBox(canvas, num_points, num_ducks);

});

