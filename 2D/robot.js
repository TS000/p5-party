function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}
 let openMouth;
function draw() {
  let shakey;
  
  if (mouseIsPressed) {
    x = x + random(-1, 1);
    y = y + random(-1, 1);
    shakey = 100;
    openMouth = 300;
    fill(0);
  } else {
    openMouth = 20;
    shakey = 50 + x;
    fill(255);
  }
 
  background('rgba(0, 0, 0, 0)');
  fill('#eee');
  rect(30, 30, 340, 400, 50, 50, 5, 5);
  rect(30, 30, 320, 400, 50, 50, 5, 5);
  fill('red')
  ellipse(100, 100, 55, 55);
  fill('red')
  ellipse(250, 100, 55, 55);
  fill('black')
  
  rect(100, 200, 155, openMouth);
}