function setup() {
  createCanvas(600, 400);
  fill(0, 102, 200);
  noStroke()
}

function draw() {
  var g = map(mouseY, 0, height, 0, 255);
  background(g)
  
  random(0,255)// trying to change the color of the fill randomly every time with a value from 0-255
  fill(random,random,random)//using the defined random fill above to make a random color
rect(300, 20, 55, 55)//random colored rectangle

  
  var h = map(mouseX, 0, width, 0, 50);
  ellipse(300, 200, h, 50);
  
  var words = ["confusing","hopeful","done"];
var word = random(words); //cycling words, couldnt figure out how to slow them down though...
text(word,100,100,1);
  
}
