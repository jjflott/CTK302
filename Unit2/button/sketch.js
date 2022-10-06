/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


let state = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/cocogoose.ttf");
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
      background("#d0752f");
      textFont(f1, 43);
      text("I have a joke \n about pizza", width/2, height/2);
      break;

    case 1:
      background("#5ea184");
      textFont(f1, 43);
      text("but it's too cheesy", width/2, height/2);
      break;
  }

  rect(100, 100, 100, 100);


}


function mouseReleased() {

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {

  state++ ;
  if (state > 1) state = 0;
  }

}