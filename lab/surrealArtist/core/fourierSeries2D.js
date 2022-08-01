
//angle
let time = 0;


//store previous wave points to draw wave simulation

let x = [];
let y =[];
let fourierX;
let fourierY;

let path = [];

function setup() {
  createCanvas(2000, 2000);
  const skip = 1;
  for (let i = 0; i<drawing.length; i+=skip){
    x.push(drawing[i].x);
    y.push(drawing[i].y);

  }

  fourierX = dft(x);
  fourierY = dft(y);

//  fourierX.sort((a,b) => b.amp - a.amp);
//  fourierY.sort((a,b) => b.amp - a.amp);
}

function draw() {

  background(0);

  let vX  = epiCycles(width/2, 100, 0, fourierX);
  let vY = epiCycles(100, height/2, HALF_PI, fourierY);

  // console.log("x : ", vX, "y : ",vY)
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
  // console.log(time);

  // if(time > TWO_PI){
  //   time = 0;
  //   path = [];
  // }

  // if(path.length > 250){
  //   path .pop()
  // }

}
