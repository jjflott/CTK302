/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5;
let f1;
let simlish;

function setup() {
  createCanvas(700, 600);
  i1 = loadImage("assets/dressy.jpg");
  i2 = loadImage("assets/egirl.jpg");
  i3 = loadImage("assets/beach.JPG");
  i4 = loadImage("assets/glitch.JPG");
  i5 = loadImage("assets/mulan.jpg");
  f1 = loadFont("assets/pocket.ttf");
  imageMode(CENTER);
  textAlign(CENTER);
  simlish.play();
}

function preload() {
  simlish = loadSound("assets/simlish.mp3");
}


function draw() {
  background(220);

  switch (state) {
    case 0:
      background("#965ba4");
      // images go here, text here

      textFont(f1, 28);
      text("click to play :)", width/2, 300);
      break;
    
    
    case 1:
      background("#965ba4");
      // images go here, text here

      textFont(f1, 28);
      text("glammed up sims I made in 2019", width/2, 100);
      image(i1, width/2 - 80, height/2 - 60, 300, 200);
      image(i2, width/2 + 80, height/2 + 180, 300, 200);
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("#fff682");
      textFont(f1, 28);
      text("when the island living pack dropped and my sim glitched", width/2, 100);
      image(i3, width/2 - 80, height/2 - 30, 200, 300);
      image(i4, width/2 + 130, height/2 + 80, 200, 300);
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      background("lightblue");
      textFont(f1, 28);
      text("making a modern day mulan in create a sim", width/2, 100);
      image(i5, width/2, height/2 + 80, 500, 365);
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
  
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }

  if (elevate.isPlaying()) {
    elevate.pause();
  }  else {
      elevate.play()
  }

}



function touchStarted() {
  getAudioContext().resume();
}