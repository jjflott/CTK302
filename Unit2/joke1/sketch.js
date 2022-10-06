/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


let state = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/honeymints.ttf");
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
      background("lightblue");
      textFont(f1, 48);
      text("where do you learn \n to make ice cream?", width/2, height/2);
      break;

    case 1:
      background("lightpink");
      textFont(f1, 48);
      text("sundae school", width/2, height/2);
      break;
  }
}


function mouseReleased() {
  state++ ;
  if (state > 1) state = 0;
}