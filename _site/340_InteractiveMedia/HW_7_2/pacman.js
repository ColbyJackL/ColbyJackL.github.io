function Pacman(canvX, canvY, pacmanDiameter) {


    this.wait = false;
    this.canvasWidth = canvX;
    this.canvasHeight = canvY;

    this.pDiam = pacmanDiameter;
    this.pXPos = random(this.pDiam / 2, canvX - this.pDiam / 2); // position of pacman
    this.pYPos = random(this.pDiam / 2, canvY - this.pDiam / 2);
    this.startAngle = QUARTER_PI; // angle of mouth
    this.stopAngle = -QUARTER_PI;
    this.eyeX = -this.pDiam / 8; // pacman eye position
    this.eyeY = -this.pDiam / 4;

    this.pacXDirec = 1; // direction of movement
    this.pacYDirec = 0;
    this.pacSpeed = 1; // speed

    this.secTime = 0; // timer variables
    this.secTimeMax = 240; // 240 frames is four seconds
    this.timeGoal = random(this.secTimeMax + 1);
    this.dirCount = 0;

    this.startAngleChange = -1; // variables to move the mouth
    this.stopAngleChange = 1;
    this.mouthChange = 0;
    this.mouthDelta = 0.01;
}

Pacman.prototype.drawPacman = function() {
    push();
    translate(this.pXPos, this.pYPos); // set pacman position
    fill("rgb(255, 214, 0)"); // Pacman Fill color
    arc(0, 0, this.pDiam, this.pDiam, this.startAngle - this.mouthChange, this.stopAngle + this.mouthChange, PIE); // make pacman based on variables
    fill(0);
    ellipse(this.eyeX, this.eyeY, this.pDiam / 9, this.pDiam / 9);
    pop();
}

Pacman.prototype.movePacman = function() {
  if (this.wait) {
    // do nothing
  } else {
    this.pXPos += this.pacXDirec * this.pacSpeed; //moves pacman based on direction and speed
    this.pYPos += this.pacYDirec * this.pacSpeed;
  }
  //Upate Mouth position
  if (this.mouthChange > PI/4 - 0.01 ) {
    this.mouthDelta = this.mouthDelta * -1;
    this.mouthChange = PI/4 - 0.01;
  } else if ( this.mouthChange <= 0 ) {
      this.mouthDelta = this.mouthDelta * -1;
      this.mouthChange = 0.001;
  }
  this.mouthChange += this.mouthDelta * this.pacSpeed

  this.wallCollision();
}




Pacman.prototype.northPacman = function() { // make pacman go north
    this.startAngle = -QUARTER_PI; // set mouth direction
    this.stopAngle = PI + QUARTER_PI;
    this.eyeX = -this.pDiam / 4; // set position of eye
    this.eyeY = this.pDiam / 8;
    this.pacXDirec = 0; // set movement direction
    this.pacYDirec = -1;
    this.pacSpeed = random(1, 6);
}

Pacman.prototype.southPacman = function() { // make pacman go south
    this.startAngle = HALF_PI + QUARTER_PI;
    this.stopAngle = QUARTER_PI;
    this.eyeX = this.pDiam / 4;
    this.eyeY = -this.pDiam / 8;
    this.pacXDirec = 0;
    this.pacYDirec = 1;
    this.pacSpeed = random(1, 6);
}

Pacman.prototype.westPacman = function() { // make pacman go west
    this.startAngle = PI + QUARTER_PI;
    this.stopAngle = PI - QUARTER_PI;
    this.eyeX = this.pDiam / 8;
    this.eyeY = -this.pDiam / 4;
    this.pacXDirec = -1;
    this.pacYDirec = 0;
    this.pacSpeed = random(1, 6);
}

Pacman.prototype.eastPacman = function() { // make pacman go east
    this.startAngle = QUARTER_PI;
    this.stopAngle = -QUARTER_PI;
    this.eyeX = -this.pDiam / 8;
    this.eyeY = -this.pDiam / 4;
    this.pacXDirec = 1;
    this.pacYDirec = 0;
    this.pacSpeed = random(1, 6);
}

Pacman.prototype.timer = function() { // creates a timer
    if (this.secTime >= this.timeGoal) {
        this.changeDir(); // calls function when timer elapses
        this.secTime = 0; // resets timer
        this.timeGoal = random(0, this.secTimeMax + 1); // resetst random timer goal
    } else {
        this.secTime++; //increments timer
    }
}

Pacman.prototype.wallCollision = function() {
    if (this.pXPos >= this.canvasWidth - this.pDiam / 2) {
        this.stopMoving;
        this.pXPos = this.canvasWidth - this.pDiam / 2; //pacman stays in canvas
    } else if (this.pXPos <= this.pDiam / 2) {
        this.stopMoving;
        this.pXPos = this.pDiam / 2;
    }
    if (this.pYPos >= this.canvasHeight - this.pDiam / 2) {
        this.stopMoving;
        this.pYPos = this.canvasHeight - this.pDiam / 2; //pacman stays in canvas
    } else if (this.pYPos <= this.pDiam / 2) {
        this.stopMoving;
        this.pYPos = this.pDiam / 2;
    }
}



Pacman.prototype.changeDir = function() {
    var newDirCount;

    do {
        newDirCount = floor(random(4)); // pacman direction does not repeat
    } while (newDirCount == this.dirCount);

    this.dirCount = newDirCount;

    if (newDirCount === 0) { // Call function for newdirection
        this.eastPacman();
    } else if (newDirCount === 1) {
        this.westPacman();
    } else if (newDirCount === 2) {
        this.northPacman();
    } else if (newDirCount === 3) {
        this.southPacman();
    }
}

Pacman.prototype.pacmanCollide = function(pacArr, myIdx) {
    var pacmanX = 0;
    var pacmanY = 0;
    var pacmanDistance = 0;
    var pacmanXDirection = 0;
    var pacmanYDirection = 0;
    var pacmanDiam = 0;

    this.wait=false;
    for (var i = 0; i < pacArr.length; i++) {
        if (i != myIdx) {

            otherX = pacArr[i].pXPos;
            otherY = pacArr[i].pYPos;
            otherXDirection = pacArr[i].pacXDirec;
            otherYDirection = pacArr[i].pacYDirec;
            combDiam = pacArr[i].pDiam/2 + this.pDiam/2 + this.pacSpeed;


            pacmanDistance = dist(this.pXPos, this.pYPos, otherX, otherY);
            if (pacmanDistance <= combDiam && this.pXPos > otherX && this.dirCount == 1 ) {
                this.wait = true; // checks for collision to the right
            } else if (pacmanDistance <= combDiam && this.pXPos < otherX && this.dirCount == 0 ) {
                this.wait = true; // check for collision to the left
            } else if (pacmanDistance <= combDiam && this.pYPos > otherY  && this.dirCount == 2) {
                this.wait = true; // check for collision below
            } else if (pacmanDistance <= combDiam && this.pYPos < otherY  && this.dirCount == 3) {
                this.wait = true; //checks for collison above
            }
        }
    }

}
