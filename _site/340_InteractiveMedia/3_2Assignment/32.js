var diameter = 50;
var x = 0;
var chaos;
var cnum;

// chaos and cnum (chaos number) are our random variables

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  mousePressed(); //having this here makes the first background a random color. mousePressed is similiar to an erase function here.
}

function draw() {
  for (var i = 1; i <= 5; i++) {
      for(var e = 1; e <= 5; e++) {//these loops make the cirlces fly to the left, leaving a trail of glass pipes behind
         chaos = random(186);
         cnum = random(99);
         stroke(chaos + cnum, chaos - cnum, chaos + cnum*2); //these create a random shade of purple, blue, or pink
         fill(chaos + cnum, chaos - cnum, chaos + cnum*2);
         ellipse(i*100+x, e*100, diameter, diameter);

      }


  }
  x++;
  rect(mouseX, mouseY, mouseX + 10, mouseY + 10); //this is the "paintbrush" of rectangles, all dependent on mouse location
  //these also have the crazy random colors of the circles, which was a happy accident
}
//this is the "erase" function. clicking the mouse resets the background and gets rid of any prior rectangles and circles
function mousePressed() {
  chaos = random(255);
  background(chaos, chaos/2, chaos*2); //this creates a similiar effect to the stroke() function above
}
