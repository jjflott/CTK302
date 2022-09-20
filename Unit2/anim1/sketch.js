/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let x = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/gloomy.otf");
}

function draw() {
background(100);
textSize(30);
textFont(f1, 70);
text("I love Soup", x, 200);
x = x += 5 ;

if (x > width) {
  x = 10;
}
}
