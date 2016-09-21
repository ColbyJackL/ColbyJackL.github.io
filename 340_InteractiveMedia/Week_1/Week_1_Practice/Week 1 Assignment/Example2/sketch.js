var d=50;
var x=0;
function setup() {
  createCanvas(600, 600);
  background(205,9,155);
  frameRate(100);
}

function draw() {
  for (var i = 1; i < 5; i++) {
    ellipse(i*100+x,i*100+x,d,d)
    
  }
  x++;
}