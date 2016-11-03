var R;
var G;
var B;
var WindSpeedtxt;
var x = 20;
var y = 300;
var speed =(0);
var input;
var button;
var apiKey = '&&APPID=fc42c34fd720f0fbb94d2773e9715efd';




function setup() {
  createCanvas(600, 600);
  background('#222222');

  car1 = new CAR();


  input = createInput();
  input.position(10,0);

  button = createButton("Submit Location");
  button.position(10,20);
  button.mousePressed(updateData);


}

function draw (){
var digWind;
digWind="Wind Speed: " + speed;
 background('255');

  car1.display();

  push();
  fill(256);
  stroke('#222222');
  strokeWeight(4);
  textSize();
  translate(car1.x,car1.y);
  text(digWind,0,0);
  pop();
}



function updateData() {
  var city = input.value();
  var url = 'http:api.openweathermap.org/data/2.5/weather?q=';
  url = url + encodeURI(city) + apiKey;
  console.log(city);
  console.log(url);
  loadJSON(url, handleData);
//
//   // loadJSON(url+city,handleData);
//   // x = 300;
}


function handleData(weatherData) {
  console.log(weatherData);
  speed = weatherData.wind.speed;
  car1.speed=speed;
  var humidty;
  humidity = weatherData.main.humidity;
  console.log(humidity);
}
