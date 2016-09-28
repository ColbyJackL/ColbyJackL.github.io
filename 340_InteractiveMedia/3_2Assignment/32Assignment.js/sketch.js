var xoffset = 0;

var boxX = 300;
var boxY = 200;
var boxWidth = 10;
var boxHeight = 10;

function setup() {
  createCanvas(1000, 700);
  background(205, 100, 50);
  frameRate(10)
  rectMode(CENTER)
}

function draw() {
  xoffset += 10;
  var col = { //grouped color varibles, makes a random color every loop
    r: random(1, 255),
    g: random(1, 100),
    b: random(150, 255)
  }
  var area = {
    x: 1,
    y: random(0, height)
  }
  for (var i = 1; i <= 6; i++) {

    fill(col.r, col.g, col.b);
    ellipse(i * 10 + xoffset, mouseY, 30, 30);
  }

  if (mouseIsPressed && mouseX > 500 && mouseX < 550 && mouseY > 350 && mouseY < 400) {
    //fill(col.r,col.g,col.b);
    rect(500, 0, 500, 700);
  } else {
    rectMode(CORNER);
    rect(495, 0, 10, 1000);
  }

  println(mouseIsPressed);
  //function mouseIsPressed()

  //rect(boxX, boxY, boxWidth, boxHeight);

  //function mousePressed(){
  //boxWidth += 10
  //boxHeight += 10

  rect(500, 350, 50, 50);



}