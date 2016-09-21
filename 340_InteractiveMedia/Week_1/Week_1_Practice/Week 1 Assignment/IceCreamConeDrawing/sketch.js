function setup() {
  createCanvas(700, 700);
  background(51);
}

function draw() {
  //Ice Cream
  stroke(225, 128, 196);
  strokeWeight(19);
  fill(251, 148, 186);
  ellipse(350, 200, 300);
  //Ice Cream Cone
  strokeWeight(5);
  stroke(178,153,130);
  fill(198,163,120);
  triangle(200, 250, 350, 650, 500, 250);
  noCursor();
  
  
  

}