var ball = {
  x: 100,     //
  y: 400,
  xspeed: 10,
  yspeed: -6
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(81, 32, 10);
  move();
  bounce();
  display();
  icecone(250, 200, 200, 300, 400, 100);

}
//Customizable Ice Cream Cone Thing
function icecone(center, leftedge, topedge, rightx, middlebottom, diameter) {
  stroke(255, 204, 0);
  fill(200, 14, 150)
  ellipse(center, topedge, diameter)
  fill(230, 100, 7)
  triangle(leftedge, topedge, rightx, topedge, center, middlebottom)
}
//makes circle move
function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
//makes circle bounce back once it reaches the edge
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}
//draws the circle
function display() {
  stroke(255, 0, 100);
  strokeWeight(4);
  fill(230,70,70)
  ellipse(ball.x, ball.y, 70, 65)
}