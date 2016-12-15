var mic;

function setup() {
  createCanvas(500,500);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(200,100,10);
  var vol = mic.getLevel();

  ellipse(250,250,vol*500,vol*500 )
  console.log(vol);
}
