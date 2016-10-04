//1 GRID OF BOXES
//WHEN MOUSE TOUCHES BOX IT GOES AWAY
//THE COLOR OF THE BOXES GRADUALLY SHIFTS DIAGONALLY
var b;

function setup() {
  createCanvas(800,400);
  b = new Brick(10, 10, 40, 20, 180)
  
  for (var y = 0; y < height; y+=22) {
    for (var x = 0; x < width; x=+42)
    b.push ( new Brick(10, y, 40, 20, 0));
  }
}

function draw() {
  if (mouseX >= b[i].xpos && mouseX <= b[i].xpos+b[i].w && mouseY >= b[i].ypos && mouseY <= b[i].ypos+b[i].h)
  
  b.draw();
  for (var i = 0, i < b.length; i++) {
    b[i].draw();
  }
  
  
}

