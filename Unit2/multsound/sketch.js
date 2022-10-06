/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = -1;
let s1, s2, s3;
let f1;

function preload() {
  s1 = loadSound("assets/happyrock.mp3");
  s2 = loadSound("assets/memories.mp3");
  s3 = loadSound("assets/pianomoment.mp3");
}

function setup() {
  createCanvas(800, 800);
  f1 = loadFont("assets/cocogoose.ttf");
}

function draw() {

  switch (state) {
    case -1:
      background("#0998f6");
      textFont(f1, 40);
      text("please click to start \n :)", 100, 100);
      break;

    case 0:
      background("#d92666");
      textFont(f1, 40);
      text("song name: Happy Rock", 100, 100);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      background("#5ba47e");
      textFont(f1, 40);
      text("song name: Memories", 100, 100);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      background("#c9ad36");
      textFont(f1, 40);
      text("song name: Piano Moment", 100, 100);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}