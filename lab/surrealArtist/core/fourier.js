

function dft(x, numCircle){
//Discrte Fourier Transfor
  let X = []
  const N = x.length;

  for(let k = 0; k<N/2; k++){

    let re = 0;
    let im = 0;

    for(let n = 0; n<N; n++){
      const phi = (TWO_PI * k * n) / N;
      re += x[n] * cos(phi);
      im -= x[n] * sin(phi);
    }

    re = re / N;
    im = im / N;

    let freq = k;
    let amp = sqrt(re*re+ im*im);
    let phase = atan2(im,re);

    X[k] ={re, im, freq, amp, phase};
  }

  return X;
}

function epiCycles(x, y, rotation, fourier){
  for(let i = 0; i<fourier.length; i++){
    xPrev = x;
    yPrev = y;

    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq*time + phase + rotation);
    y += radius * sin(freq*time + phase + rotation);


    stroke(255,150);
    noFill();
    ellipse(xPrev,yPrev,radius*2);

    fill(255);
    stroke(255);
    line(xPrev,yPrev,x,y);
  }

  return createVector(x,y);
}