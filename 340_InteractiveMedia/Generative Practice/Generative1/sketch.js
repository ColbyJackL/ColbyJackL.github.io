var lineObject;

function setup() {
  createCanvas ( windowWidth, windowHeight );
  lineObject = new LineThingy(100);
  lineObject.createInitPts();
}

function draw() {
  background(255);
  lineObject.drawLines();
  lineObject.moveDaPts( random(20) );
}


function LineThingy(numOfPts){
  this.numOfPts = numOfPts;
  this.pts = [];
};

LineThingy.prototype.createInitPts = function () {

  this.pts[0] = [random(width), random(height)];

  for (var i = 1; i < this.numOfPts; i++) {
    var pt1 = constrain(this.pts[i-1][0] + random(width*-0.1,width*0.1), 0, width);
    var pt2 = constrain(this.pts[i-1][1] + random(height*-0.1,height*0.1), 0, height);
    this.pts[i] = [pt1, pt2];
  }
};

LineThingy.prototype.drawLines = function () {

  for (var i = 1; i < this.pts.length; i++) {
    stroke(0);
    line(this.pts[i-1][0],this.pts[i-1][1],this.pts[i][0],this.pts[i][1]);
  }


}

LineThingy.prototype.moveDaPts = function ( moveAmt ) {
  for (var i = 0; i < this.pts.length; i++) {
    var temp = this.pts[i];
    temp[0] = constrain( random(-moveAmt,moveAmt) + temp[0], 0, width );
    temp[1] = constrain( random(-moveAmt,moveAmt) + temp[1], 0, height );
    this.pts[i] = temp;
  }
};
