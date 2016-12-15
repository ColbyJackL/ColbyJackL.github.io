var sadFace = {
  faceDiam: 300,
  EyeY: 0,
  EyeX: 0,
  eyeXDiam: 0,
  eyeYDiam: 0,
  mouthX: 0,
  mouthY: 0,
  mouthWidth: 0,
  mouthHeight: 0,


  defineFace: function() {
    this.eyeY = 0 - this.faceDiam / 6;
    this.eyeX = this.faceDiam / 6;
    this.eyeXDiam = this.faceDiam / 10;
    this.eyeYDiam = this.faceDiam / 5;
    this.mouthY = this.faceDiam / 6;
  }


}

function setup() {
  createCanvas(800, 400)
}

function draw() {
  background(45);
  stroke(1);
  //Sad Drawing
  translate(400, 200);
  //Face
  ellipse(0, 0, sadFace.faceDiam, sadFace.faceDiam);
  //fill(245, 0, 50)
  ellipse(sadFace.eyeX, sadFace.eyeY, sadFace.eyeXDiam, sadFace.eyeYDiam);
  ellipse(sadFace.eyeX, sadFace.eyeY, sadFace.eye)


}