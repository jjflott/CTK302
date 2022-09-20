/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let x = -600;


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background (100);
  push();
  translate(x, 0);
  avatar();
  x+= 5;
  if (x > width) {
    x = -600;
  }
  pop();
}


function avatar() {
  fill("grey");
  rect(391, 280, 250, 150);
  
  fill("darkgrey");
  rect(330, 381, 50, 58);
  
  fill("darkgrey");
  rect(443, 381, 50, 58);
  
  fill("white");
  ellipse(319, 267, 60, 60);
  
  fill("white");
  ellipse(455, 267, 60, 60);
  
  fill("black");
  ellipse(320, 265, 30, 30);
  
  fill("black");
  ellipse(455, 265, 30, 30);
  

  fill("darkgrey");
    rect(477, 180, 20, 50);
    
     fill("darkgrey");
    rect(390, 151, 195, 20);
    
     fill("darkgrey");
    rect(302, 180, 20, 50);
    
     fill("darkgrey");
    rect(386, 267, 50, 60);
    
     fill("grey");
    rect(387, 250, 25, 15);
    
    fill("grey");
    rect(386, 265, 51, 10);
    
     fill("grey");
    rect(387, 285, 25, 15);
    
}
