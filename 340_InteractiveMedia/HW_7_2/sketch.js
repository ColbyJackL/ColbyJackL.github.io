var pacmen = [];

function setup() {
  frameRate(60);
  createCanvas(1000, 600);

  for (var i = 0; i < 7; i++) { //changes number of pacmen
    pacmen[i] = new Pacman(width, height, 40);
  }
}

function draw() {
  background(0);

  for (var i = 0; i < pacmen.length; i++) {
    pacmen[i].drawPacman();
    pacmen[i].movePacman();
    pacmen[i].timer();
    //pacmen[i].pacmanCollide();
  }

}
