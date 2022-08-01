/** */
/** */
let x = 1;
let y = 1;
let z = 1;
/** */
let sigma = 10;  //a
let rho = 28;    //b
let beta = 8/3;   //c
/** */
let dt = 0.001;
let dx;
let dy;
let dz;
/** */
let points = [];
/** */
let hu = 0;
let bg = 0;
let bgFlag = 0;
/** */



function setup() {
    pixelDensity(1.0);
    createCanvas(1920,1075, WEBGL);
    colorMode(HSB);
    easycam = createEasyCam();
    //frameRate(fr);
  
    // initialize recorder
    //record();

    
}
/** */
function draw() {

    dx = (sigma*(y - x))*dt;
    dy = (x*(rho - z) - y)*dt;
    dz = (x*y -beta*z)*dt;
    /** */
    x = x + dx;
    y = y + dy;
    z = z + dz;
    background(0);
    console.log
    
    /** */
    // console.log(x,y,z)
    /** */
    // translate(width/2, height/2,0);
    append(points, createVector(x, y, z));
    translate(0, 0, 0);
    scale(2);;
    
    orbitControl();
    stroke(255);
    
    noFill();
    
    rotateY(frameCount * 0.001);
    beginShape();
    for (var i = 0; i < points.length; i++) {
        stroke(hu, 255, 255);
       // vertex(points[i].x, points[i].y, points[i].z );
        noFill();
        
        let v = p5.Vector.random3D();
        v.mult(0.1);
        console.log(v);
        hu = hu + 0.1;
        
        if(hu>255){
            hu = 0;
            if (bgFlag == 0){
                bg = bg+1;
                if(bg>50){
                    bgFlag = 1;
                }
            }
            if (bgFlag == 1){
                bg = bg-1;
                if(bg<0){
                    bgFlag = 0;
                }
            }
        }
        
        
    }
    endShape();
    rotateY(frameCount*0.001 );
    rotateZ(frameCount* 0.001);
    rotateX(frameCount*0.001);
    strokeWeight(2);
    stroke(hu, 255, 255);
    
    box(100);
    strokeWeight(2);
    stroke(hu, 255, 255);
    rotateY(frameCount*0.03 );
    rotateZ(frameCount* 0.03);
    rotateX(frameCount*0.03);
    box(100);

    stroke(hu, 255, 255);
    rotateY(frameCount*0.05 );
    rotateZ(frameCount* 0.05);
    rotateX(frameCount*0.05);
    box(100);



    let s = 'The quick brown fox jumped over the lazy dog.';
    fill(50);
    text(s, 10, 10, 70, 80); // Text wraps within text box
    
}
