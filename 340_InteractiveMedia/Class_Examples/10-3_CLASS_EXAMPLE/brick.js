//making bricks

//constructor
function Brick(xpos, ypos, w, h, color) {
  this.x = xpos;
  this.y = ypos;
  this.w = w;
  this.h = h;
  this.color = color
}

Brick.prototype.draw = function() {
  var c = color('hsl('+this.color + ', 100%, 50%');
  fill(c);
  rect(this.x, this.y, this.w, this.h );

};