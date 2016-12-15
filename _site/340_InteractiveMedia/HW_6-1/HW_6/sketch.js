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

//Need to add button so that the background rotates only when the center button is clicked


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

  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
