/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let numberOfTouches;
let f1;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/ari.jpeg");
  i2 = loadImage("assets/the1975.jpeg");
  i3 = loadImage("assets/tinashe.jpeg");
  f1 = loadFont("assets/gloomy.otf");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  textFont(f1);
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1: 
      image(i1, width/2, height/2 - 120, 100, 100);
       text("it's kind of lonely here", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:
        image(i2, width/2, height/2 - 120, 100, 100);
      text("two fingers are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
        image(i3, width/2, height/2 - 120, 100, 100);
     text("three are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}