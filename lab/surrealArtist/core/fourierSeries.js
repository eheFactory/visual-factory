
//angle
let time = 0;

//store previous wave points to draw wave simulation
let wave = [];


let slider;

function setup() {
  createCanvas(1800, 900);
  slider = createSlider(1, 10, 1);
}

function draw() {
  background(0);
  translate(500,400) ;

  let x = 0;
  let y = 0;

  for(let i = 0; i<slider.value(); i++){
    xPrev = x;
    yPrev = y;

    let n = i*2 + 1;
    let radius = 200*(4/(n*PI));
    x += radius * cos(n*time);
    y += radius * sin(n*time);


    stroke(255,100);
    noFill();
    ellipse(xPrev,yPrev,radius*2);

    fill(255);
    stroke(255);
    line(xPrev,yPrev,x,y);
  }

  wave.unshift(y);

  translate(600,0);
  line(x - 600, y, 0, wave[0]);
  beginShape();
  noFill();
  for(let i = 0; i<wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.01;

  if(wave.length > 500){
    wave.pop()
  }
}
