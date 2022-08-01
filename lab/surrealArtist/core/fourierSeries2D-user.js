
//angle
let time = 0;


let USER = 0;
const FOURIER = 1;
//store previous wave points to draw wave simulation

let x = [];
let y =[];
let fourierX;
let fourierY;

let path = [];

let drawing = [];
let state = USER ;

function mousePressed(){
  state = USER;
  drawing = [];
  x = [];
  y = [];
  time = 0;
}

function mouseReleased(){
  state = FOURIER;
  const skip = 1;
    for (let i = 0; i<drawing.length; i+=skip){
      x.push(drawing[i].x);
      y.push(drawing[i].y);
    }

    fourierX = dft(x);
    fourierY = dft(y);

    fourierX.sort((a,b) => b.amp - a.amp);
    fourierY.sort((a,b) => b.amp - a.amp);
}

function setup() {
  createCanvas(800, 600);
  state = -1;

/*  const skip = 8;
  for (let i = 0; i<drawing.length; i+=skip){
    x.push(drawing[i].x);
    y.push(drawing[i].y);
  }

  fourierX = dft(x);
  fourierY = dft(y);

  fourierX.sort((a,b) => b.amp - a.amp);
  fourierY.sort((a,b) => b.amp - a.amp);*/
}

function draw() {
  background(0);

  if( state == USER){
    let point = createVector(mouseX - width/2, mouseY - height/2);
    drawing.push(point);

    stroke(255);
    noFill();
    beginShape();
    for( let v of drawing){
      vertex(v.x + width/2, v.y+height/2);
    }
    endShape();
  }
  else if(state == FOURIER){

    let vX  = epiCycles(width/2, 100, 0, fourierX);
    let vY = epiCycles(100, height/2, HALF_PI, fourierY);

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

    if(time > TWO_PI){
      time = 0;
      path = [];
    }
  }
/*
  if(path.length > 250){
    path .pop()
  }
*/
}
