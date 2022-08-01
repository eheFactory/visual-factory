
//angle
let time = 0;

//store previous wave points to draw wave simulation

let x = [];
let y =[];
let fourierX;
let fourierY;

let path = [];
function setup() {
  createCanvas(1280, 720);

  for (let i = 0; i<500; i++){
    x[i] = 150*noise(i/50);
    y[i] = 150*noise(i/50 + 1000);
  }

  fourierX = dft(x);
  fourierY = dft(y);
  console.log(fourierY);
}

function draw() {
  background(0);


  let vX  = epiCycles(400, 50, 0, fourierX);
  let vY = epiCycles(50, 200, HALF_PI, fourierY);

  let v = createVector(vX.x, vY.y)

  path.unshift(v);

  //wave.unshift(y);

  line(vX.x, vX.y, v.x, v.y);
  line(vY.x, vY.y, v.x, v.y);

  //translate(200,0);
  //line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for(let i = 0; i<path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();

  const dt = TWO_PI/fourierY.length;
  time += dt;
  console.log(dt);
/*
  if(path.length > 250){
    path .pop()
  }
*/
}
