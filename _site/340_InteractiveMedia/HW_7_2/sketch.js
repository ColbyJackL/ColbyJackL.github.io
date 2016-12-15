var pacmen = [];
var numPacmen = 10;

function setup() {
  frameRate(60);
  createCanvas(1000, 600);

  for (var i = 0; i < numPacmen; i++) { //changes number of pacmen
    pacmen[i] = new Pacman(width, height, 40);
  }
}

function draw() {
  background(0);

  for (var i = 0; i < pacmen.length; i++) {

    pacmen[i].pacmanCollide( pacmen, i );
    pacmen[i].movePacman();
    pacmen[i].timer();
    pacmen[i].drawPacman();

  }

}
