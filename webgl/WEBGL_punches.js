let angle = 10;
let w = 150;
let ma;
let maxD;
let color;

function setup() {
  createCanvas(500, 500, WEBGL);
  ma = atan(1 / sqrt(20))
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0)
  ortho(-400, 400, 400, -400, 0, 1000);
  // noStroke()
  
  // rotateY(ma + (mouseY / 70))
  // rotateX(TAU / 4 + (mouseX / 70));
  
   rotateY(50)
  rotateX(30);
  

  // rotateX(angle * .25);
  
 
  for (let z = 0; z < height; z += w){
    for (let x = 0; x < width; x += w){
      push();
      let d = dist(x,z,width /10, height /2);
      let offset = map(d, 0, maxD, -PI, PI)
      let a = angle + offset;
      let h = floor(map(tan(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial()

      
      // emissiveMaterial(touches.length, 100, mouseY / 2, 10)
      // emissiveMaterial('red')

      box(w - 2, h, w - 2);
      pop();
    }
  }
  
  angle -= 0.02;
 
}