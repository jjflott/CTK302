/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("#FF9800");
     //  text("in state 0", 100, 100);
       
      for (let j = 0; j < height; j += 35) {
        for (let i = 0; i < width; i += 35) {
          ellipse(i, j, 30, 20);
        }
      }
      break;

    case 1:
      background("#03A9F4");
      // text("in state 1", 100, 100);
      for (let j = 0; j < height; j += 65) {
        for (let i = 0; i < width; i += 28) {
          rect(i, j, 80, 20);
        }
      }
      break;

    case 2:
      background("#FFEB3B");
      // text("in state 2", 100, 100);
      for (let j = 31; j < height; j += 31) {
        for (let i = 38; i < width; i += 38) {
          quad(i, j, 86, 20, 69, 63, 30, 76);
        }
      }
      break;

    case 3:
      background("#D226F0");
     // text("in state 3", 100, 100);
       for (let j = 0; j < height; j += 85) {
        for (let i = 0; i < width; i += 28) {
          arc(i, j, 80, 80, 0, PI + QUARTER_PI, PIE);
        }
      }
      break;

    case 4:
      background("#B6FA68");
     // text("in state 4", 100, 100);
       for (let j = 0; j < height; j += 15) {
        for (let i = 0; i < width; i += 88) {
            rect(i, j, 80, 80);
         }
       }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}

