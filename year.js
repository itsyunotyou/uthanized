let dots = [];
let guideDots = [];
let currentIndex = 0;
let drawingCompleted = false;

let lastPos = { x: 340, y: 170 };
let currentPos = { x: 340, y: 170 };
let dotSize = 10;

const guidePoints = [
{x: 162, y: 218},
{x: 340, y: 170}, //1//
{x: 740, y: 500},
{x: 980, y: 500},
{x: 1210, y: 670},
{x: 1210, y: 720},
{x: 740, y: 720},
{x: 458, y: 500}, //7//
{x: 448, y: 720},
{x: 340, y: 720},
{x: 330, y: 560}, //10//
{x: 250, y: 460},
{x: 260, y: 250}, //12//

];

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  connect(px, py) {
    stroke(3);
    line(this.x, this.y, px, py);
  }
  plot(fillColor) {
    fill(fillColor);
    stroke(fillColor);
    strokeWeight(3);
    ellipse(this.x, this.y, dotSize);
  }
  plotText(txt) {
    fill(0, 0, 0);
    strokeWeight(0);
    textSize(20);
    text(txt, this.x+8, this.y+10);
  }
  within(px, py) {
    let isWithin = false;
    let d = dist(px, py, this.x, this.y);
    isWithin = d < dotSize ? true: false;
    return isWithin;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 1; i < guidePoints.length; i++) {
    guideDots.push(new Dot(guidePoints[i].x, guidePoints[i].y));

    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// prevents touch gestures on touch screens from dragging the page around 
function touchMoved() {
  return false
}



function draw() {
  background(255, 255, 255);
  textFont('Times');
    
  for (let i = 0; i < guideDots.length; i++) {
    guideDots[i].plot(222, 160);
    guideDots[i].plotText(i+1);
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].plot(0, 0, 0);
    if (i > 0) {
      dots[i].connect(dots[i-1].x, dots[i-1].y);
    }
  }
 
  if (currentIndex == 0) {
    fill(0, 0, 0);
    strokeWeight(0);
    textSize(15);
    text("☆", guideDots[0].x-5, guideDots[0].y+30);    
  }
  else if (!drawingCompleted) {
    stroke(0, 0, 0);
    strokeWeight(3);
    line(lastPos.x, lastPos.y, currentPos.x, currentPos.y);
  }
  else {
    fillVertex();
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(5);
    myURL();
    if (mouseIsPressed === true) {
      sprayPaint()
    }

  }
}

function myURL() {
  window.location.replace('comment.html');
}

function fillVertex() {
  stroke(5);
  fill(0, 0, 0);
  beginShape();
  for (let i = 0; i < dots.length; i++) {
    vertex(dots[i].x, dots[i].y);
  }  
  endShape(CLOSE);
}

function mousePressed() {
  currentPos.x = mouseX;  
  currentPos.y = mouseY;
  if (!drawingCompleted &&
      guideDots[currentIndex].within(mouseX, mouseY)) {
    dots.push(new Dot(mouseX, mouseY));
    currentIndex++;
    lastPos.x = mouseX;  
    lastPos.y = mouseY;
    if (currentIndex == guideDots.length) {
      drawingCompleted = true;
    }
  }
}

function mouseMoved() {
  currentPos.x = mouseX;  
  currentPos.y = mouseY;
}
