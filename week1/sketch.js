function setup() {
  createCanvas(1000, 600);
  background(194, 69, 79);
}

function draw() {

//Green Rectangle with rounded edges
  fill(100, 200, 50);
  noStroke();
  rect(50, 100, 100, 70, 10);
  
  //Grey Triangle with white semitransparent, thick stroke
  strokeWeight(6);
  stroke(255, 255, 255, 50);
  fill(50);
  triangle(100, 20, 50, 50, 50, 100);
  
  //Ellipse on the right side
  fill(255,100,150);
  noStroke()
  ellipseMode(RADIUS)
  ellipse(900, 200, 100, 45)
  
  //Diagonal line from corner to corner
  stroke(255, 204, 0);
  strokeWeight(3)
  line(0, 0, 1000, 600);
}
