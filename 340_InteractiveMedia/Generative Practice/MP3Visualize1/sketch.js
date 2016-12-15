
var song;
var fft;
var button;

var volHistory = [];
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('sample.mp3');
}

function setup() {
  createCanvas(256, 256);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 64);
  w = width/64
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  console.log(spectrum);
  stroke(255);
  // noStroke();
  // translate(width / 2, height / 2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    // var amp = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    // line(i*w, height, i*w, y);
    fill(i, 255, 255);
    rect(i * w, y, w, height - y)
    // var x = r * cos(angle);
    // var y = r * sin(angle);


    stroke(i, 0, 0);
    fill();
    // line(0, 0, x, y);
    // vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  // endShape();


}
