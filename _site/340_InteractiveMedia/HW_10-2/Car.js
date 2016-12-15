

// car constructor
function CAR (){


//random color of fill
  this.R= random(0,256);
  this.G= random(0,256);
  this.B= random(0,256);

//position and speed
  this.x = 20;
  this.y = 300;
  this.speed = (0);//weatherData.wind.speed;
  this.c = color(this.R,this.G,this.B);

  this.display = function(){
    this.x += this.speed;
    if (this.x > width) {
    this.x=20;
  }
    // body of the car
    push();
    fill(this.c);
    stroke('#222222');
    strokeWeight(3);
    rectMode(CORNER);
    rect(this.x, this.y, 100, 50);
    strokeCap(ROUND);
    pop();

    // wheels
    fill(0);
    stroke(this.c);
    strokeWeight(4);
    ellipse(this.x + 20, this.y + 45, 40, 40);
    ellipse(this.x + 80, this.y + 45, 40, 40);
  }
}
