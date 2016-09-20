function setup() {
  createCanvas(500, 500);
  background(205,0,155);
}

function draw() {
  
  boxCornerX = 200;
  boxCornerY = 200;
  
    rect(boxCornerX,boxCornerY,100,100);
    
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
      fill(0);
    } else {
      fill(255);
    }
    
  
}