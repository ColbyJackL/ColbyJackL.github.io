// create an empty array assigned to the variable sadFaces
var sadFaces = [];

function setup() {
  // define a canvas
  createCanvas(800, 400);

  // create x number of sadFace object and push() them into the array
  for (var i = 0; i < 100; i++) {
    sadFaces[i] = new SadFace(random(40, 100), 800, 400);
  }
}

function draw() {
  background(0);

  for (var i = 0; i < sadFaces.length; i++) {
    sadFaces[i].drawFace();
    sadFaces[i].move();
  }

}

function mousePressed() {
  for (var i = 0; i < sadFaces.length; i++) {
    sadFaces[i].flipMouth();
  }
}

function collisionCheck() {
  var xCur = 0;
  var yCur = 0;
  var rCur = 0;
  var disCurt = 0;

    for (var i = 0; i < sadFaces.length; i++) {
      xCur = sadFaces[i].posX;
      yCur = sadFaces[i].posY;
      rCur = sadFaces[i].faceDiam/2;

      for (var j = i+1; j < sadFaces.length; j++) {
        disCur = dist(xCur, yCur, sadFaces[j].posX, sadFaces[ ] )
        rCombo = rCur + sadFaces
      }
    }
}
