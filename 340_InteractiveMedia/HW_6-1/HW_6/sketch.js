var bubbles = [];
var squareColors = [];
var colorIndex = 0;

function setup() {
  createCanvas(800, 600);

squareColors = [color(255, 150, 0), color(0, 255, 150), color(0, 150, 255), color(255, 200, 50)];


  for (var i = 0; i < 15; i++) {
    bubbles.push(new Bubble(200, 150));
  }
  for (var i = 0; i < 15; i++) {
    bubbles.push(new Bubble(600, 150));
  }
  for (var i = 0; i < 15; i++) {
    bubbles.push(new Bubble(200, 450));
  }
  for (var i = 0; i < 15; i++) {
    bubbles.push(new Bubble(600, 450));
  }
}


function mousePressed() {
  //bubbles.push(new Bubble(mouseX, mouseY));
  colorIndex++;
}

function draw() {
  Wallpaper();
  //background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

}

//I want there to be 4 areas where 15 elipses start each at the same time. Each group will be a different color.
//because As they slowly spread they look like flowers,I also want to make it so that whenever I click the mosue the colors rotate to another group and all swap colors.
//also while the mouse is being held to change the color of the circles, I want the background to invert colors from black to white, until the mouse is released.
//Want a square behind each of inverted color of the ellipses


function Wallpaper() {
  noStroke();
  fill(squareColors[(colorIndex) % 4 ]);
  rect(0, 0, 400, 300);
  fill(squareColors[(colorIndex + 1) % 4 ]);
  rect(400, 0, 400, 300);
  fill(squareColors[(colorIndex + 2) % 4 ]);
  rect(0, 300, 400, 300);
  fill(squareColors[(colorIndex + 3) % 4 ]);
  rect(400, 300, 400, 300);
}



function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    strokeWeight(4)
    stroke(200, 30, 77, 80);
    fill(0, 255, 150, 40);
    ellipse(this.x, this.y, 24, 50);
    //How can I Make the ellipse appear in different angles each time?
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
