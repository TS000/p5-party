let numSines = 5;
let sines = new Array(numSines);
let initialRadius = 0;
let count = 0;

let speedCenter = 0.05;
let ratio = 1;
let alpha = 50;

let trace = false;

//p5 time
function setup() {
  createCanvas(710, 400);
  
  initialRadius = height / 4;
  background(204);
  
  for ( let i = 0; i < sines.length; i++) {
    sines[i] = PI;
  }
}

function draw() {
  if (!trace) {
    background(204);
    stroke(0, 255);
    noFill();
  }


push();
translate(width / 2, height / 2);

for (let i = 2; i < sines.length; i++) {
  let smallRadius = 0;
  if (trace) {
    stroke(0, 20, 255 * (float(i) / sines.length), alpha);
    fill(0, 0, 255, alpha / 2);
    smallRadius = 5.0 * (1.0 - float(i) / sines.length);
  }
  let radius = initialRadius / (i + 1);
  rotate(sines[i]);
  if (!trace) ellipse(0, 0, radius * 2, radius * 2);
  push();
  translate(0, radius);
  if (!trace) ellipse(0, 0, 5, 5);
  if (trace) ellipse(0, 0, smallRadius, smallRadius);
  pop();
  translate(0, radius);
  sines[i] = (sines[i] + (speedCenter + (speedCenter * i))) % TWO_PI;
}

pop();
}

function keyReleased() {
if (key == ' ') {
  trace = !trace;
  background(255);
}
}