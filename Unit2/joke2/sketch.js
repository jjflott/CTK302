/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


let state = 0;
let timer = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Brenza.ttf");
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
      background("#c58bd6");
      textFont(f1, 48);
      text("how do celebrities \n stay cool?", width/2, height/2);
      break;

    case 1:
      background("lightyellow");
      textFont(f1, 48);
      text("they have many fans", width/2, height/2);
      break;
  }

timer++ ;
if (timer > 4 * 60) {
  timer = 0;
  state++ ;
  if (state > 1) {
    state = 0;
  }
}

}

