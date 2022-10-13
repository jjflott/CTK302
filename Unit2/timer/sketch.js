/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = 0;
let timer = 0;
let i1, i2, i3;
let f1;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/sky1.jpeg");
  i2 = loadImage("assets/sky2.jpeg");
  i3 = loadImage("assets/sky3.jpeg");
  f1 = loadFont("assets/pocket.ttf");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("#965ba4");
      // images go here, text here

      textFont(f1, 28);
      text("oh my god, I think I'm in love", width/2, 100);
      image(i1, width/2, height/2 + 50, 370, 200);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("#fff682");
      textFont(f1, 18);
      text("the way we stay up late and talk about dumb stuff", width/2, 100);
      image(i2, width/2, height/2 + 50, 370, 200);
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("lightblue");
      textFont(f1, 18);
      text("and there is no one else I'd rather be with \n please, promise you want me", width/2, 100);
      image(i3, width/2, height/2 + 50, 370, 200);
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
