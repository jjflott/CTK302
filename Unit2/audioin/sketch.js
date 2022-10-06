/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let mic;
let vol = 0;
let f1;

function setup() {
  createCanvas(400, 400);
  f1 = loadFont("assets/pocket.ttf");

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("purple");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textFont(f1, 25);
  text(
    " - Click the screen first to give\npermission for mic input.\n - My volume is " +
      vol.toFixed(3),
    10,
    60
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(vol, 0, 1, 0, width);
  fill("black")
  rect(x, 200, 100, 50);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
