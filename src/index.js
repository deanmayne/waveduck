import WaveBox from './wavebox.js';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  let num_ducks = 3;
  let num_points = 50;
  new WaveBox(canvas, num_points, num_ducks);

});