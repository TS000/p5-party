let angle = 1;
let w = 80;
let ma;
let maxD;
let color;

function setup() {
  createCanvas(500, 500, WEBGL);
  ma = atan(1 / sqrt(4))
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0)
  ortho(-400, 400, 400, -400, 0, 1000);
  // noStroke()
  
  rotateY(ma + (mouseY / 70))
  rotateX(PI / 4 + (mouseX / 70));
  

  // rotateX(angle * .25);
  
 
  for (let z = 0; z < height; z += w){
    for (let x = 0; x < width; x += w){
      push();
      let d = dist(x,z,width /10, height /2);
      let offset = map(d, 0, maxD, -PI, PI)
      let a = angle + offset;
      let h = floor(map(tan(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      // normalMaterial()
      
      //mess with these values to change color
      emissiveMaterial(touches.length, 100, mouseY / 2, 10)
      emissiveMaterial('red')

      box(w - 2, h, w - 2);
      pop();
    }
  }
  
  angle -= 0.008;
 
}
