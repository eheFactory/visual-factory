var N = 5000 // number of input samples
var M = 8000 // number of circles
var q = 5000 // number var N = 1600 // number of input samples

var viewbox = {width: 1080};
var setupDone = false;

var follow = false;

var DFT
var l
var P
var K
var t = 0;
//Step function
var first = false;
function aabs([re, im]) {
    return Math.hypot(re, im);
}

function expim(im) {
return [Math.cos(im), Math.sin(im)];
}

function add([rea, ima], [reb, imb]) {
    return [rea + reb, ima + imb];
}

function mul([rea, ima], [reb, imb]) {
    return [rea * reb - ima * imb, rea * imb + ima * reb];
}

let zoom;
let speed;


async function setup(){
    let svg = await fetch("https://gist.githubusercontent.com/eheperson/5a2dc7ea9776bbb19ff8dcba178dc258/raw/bd97977a5f86be1b7e60cf3e6c25dd0594f4e22e/render.svg")
        .then(response => response.text())
        .then(text => (new DOMParser).parseFromString(text, "image/svg+xml"))
        .then(svg => svg.documentElement);

    var canvas= createCanvas(1000, 990);
    canvas.parent('sketcher')

    zoom = createSlider(5,50,1);
    speed = createSlider(1,10,1);
    speed.position(1700, 820);
    zoom.position(1700, 850);
    viewbox = svg.viewBox.baseVal

    let path2 = svg.querySelector("path")
    l = path2.getTotalLength()
    P = Array.from({length: N}, (_, i) => {
        const {x, y} = path2.getPointAtLength(i / N * l);
        return [x/5 - width/2 - 800, -y/5 + height/2 + 500];
    })
    console.log("P : ", P)
    console.log("l : ", l)

    K = Int16Array.from({length: M}, (_, i) => (1 + i >> 1) * (i & 1 ? -1 : 1))
    console.log(K);

    DFT = Array.from(K, k => {
        let x = [0, 0];
        for (let i = 0, N = P.length; i < N; ++i) {
        x = add(x, mul(P[i], expim(k * i / N * 2 * -Math.PI)));
        }
        return [x[0] / N, x[1] / N];
    })
    console.log("DFT : ", DFT);
    setupDone = true
}
var width = 1080;
const R = [];
function draw() {

    background(0);
    //translate(600, 600);


    if(setupDone){
        const scale2 = zoom.value()/10 * width / viewbox.width;
        const a = t * 2 / q * Math.PI;
        // Calculate the current point.
        let p = [0, 0];
        for (let i = 0; i < M; ++i) {
        p = add(p, mul(DFT[i], expim(a * K[i])));
        }

        // Zoom.
        translate(width / 2, height / 2);
        scale(scale2);
        if(follow) translate(-p[0], -p[1]);

        // Draw circles.
        noFill();
        stroke(200);
        for (let i = 0, p = [0, 0]; i < M; ++i) {
        const r = aabs(DFT[i]);
        ellipse(p[0], p[1],r*2);
        p = add(p, mul(DFT[i], expim(a * K[i])));
        }

        // Draw lines.
        stroke(200);
        for (let i = 0, p = [0, 0]; i < M; ++i) {
            prevP = p;
            p = add(p, mul(DFT[i], expim(a * K[i])))
            line(...prevP,...p);
        }

        // Draw the path.
        beginShape();
        noFill();
        stroke(255);
        if (R.length < q) R.push(p);
        for (let i = 1, n = R.length; i < n; ++i) {
            vertex(...R[i]);
        }
        endShape();
        t+=speed.value();



        fill(255);





    }
}

/*function keyPressed(){
    if (key == "q"){
        follow = !follow;
    }
}*/
