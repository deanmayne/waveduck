import WaveBox from "./wavebox.js";


document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  new WaveBox(canvas, 10, 1);

});