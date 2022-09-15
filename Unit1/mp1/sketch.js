/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


function setup() {
  createCanvas(700, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
 background("lightblue");
  
  fill("green");
  rect(18, 485, 1400, 150);
  
   fill("yellow");
  ellipse(596, 56, 100, 100);
  
  
  fill("#5C3D1D");
  rect(120, 280, 90, 260);
  
  fill("green");
  ellipse(119, 80, 90, 90);
  
  fill("green");
  ellipse(97, 127, 90, 90);
  
  fill("green");
  ellipse(48, 108, 90, 90);
  
  fill("green");
  ellipse(191, 108, 90, 90);
  
  fill("green");
  ellipse(63, 165, 90, 90);
  
  fill("green");
  ellipse(119, 170, 90, 90);
  
  fill("green");
  ellipse(147, 120, 90, 90);
  
  fill("green");
  ellipse(174, 165, 90, 90);
  

  
  if (mouseIsPressed) {
    
    background("darkblue");
    
    textSize(16);
    fill("yellow");
    text("But by night she has fun", 250, 60);
    
    textSize(16);
     fill("yellow");
    text("when the party begins!", 370, 100);
    
  fill("green");
  rect(18, 485, 1400, 150);
  
   fill("white");
  ellipse(596, 56, 100, 100);
  
  
  fill("#5C3D1D");
  rect(120, 280, 90, 260);
  
  fill("green");
  ellipse(119, 80, 90, 90);
  
  fill("green");
  ellipse(97, 127, 90, 90);
  
  fill("green");
  ellipse(48, 108, 90, 90);
  
  fill("green");
  ellipse(191, 108, 90, 90);
  
  fill("green");
  ellipse(63, 165, 90, 90);
  
  fill("green");
  ellipse(119, 170, 90, 90);
  
  fill("green");
  ellipse(147, 120, 90, 90);
  
  fill("green");
  ellipse(174, 165, 90, 90);
    
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
    
  arc(385, 308, 80, 80, 0, PI, CHORD);

    fill("darkgrey");
    rect(386, 267, 50, 60);
    
     fill("grey");
    rect(387, 250, 25, 15);
    
     fill("grey");
    rect(386, 265, 51, 10);
    
    
     fill("grey");
    rect(387, 285, 25, 15);
  
       
  } else {
    // when the mouse isn't pressed!
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
    
    textSize(16);
    fill("purple");
    text("Música has no fun during the day", 280, 60);
    
     textSize(16);
    fill("purple");
    text("without a party to play music", 295, 100);
    
    
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

  
 // text(mouseX + ", " + mouseY, 40, 40);
  
  
}


