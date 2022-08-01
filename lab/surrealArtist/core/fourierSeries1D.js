
//angle
let time = 0;

//store previous wave points to draw wave simulation
let wave = [];

let y =[];

let fourierY;

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i<100; i++){
    y[i] = i;
  }
  fourierY = dft(y);
  console.log(fourierY);
}

function draw() {
  background(0);
  translate(150,200) ;

  let x = 0;
  let y = 0;

  for(let i = 0; i<fourierY.length; i++){
    xPrev = x;
    yPrev = y;

    let freq = fourierY[i].freq;
    let radius = fourierY[i].amp;
    let phase = fourierY[i].phase;
    x += radius * cos(freq*time + phase + HALF_PI);
    y += radius * sin(freq*time + phase + HALF_PI);


    stroke(255,100);
    noFill();
    ellipse(xPrev,yPrev,radius*2);

    fill(255);
    stroke(255);
    line(xPrev,yPrev,x,y);
  }

  wave.unshift(y);

  translate(200,0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for(let i = 0; i<wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();

  const dt = TWO_PI/fourierY.length;
  time += dt;
  console.log(dt);
/*
  if(wave.length > 250){
    wave.pop()
  }
*/
}
