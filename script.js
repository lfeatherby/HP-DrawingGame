let gold, silver, bronze, font;
let c, t, div, tex;
let px1 = 100;
let py1 = 175;
let px2 = 300;
let py2 = 225;
function preload() {
  gold = loadImage('gold.jpg');
  silver = loadImage('silver.jpg');
  bronze = loadImage('bronze.jpg');
  font = loadFont('Inconsolata.otf');
}
function setup() {
  const canv = createCanvas(400, 400, WEBGL);
  canv.position(windowWidth / 4, windowHeight / 4);
  background(255);
  pg = createGraphics(100, 100);
  div = createDiv();
  div.position(windowWidth / 2, windowHeight / 2);
  textFont(font);
  textSize(24);
  textAlign(CENTER, CENTER);

}
//quadrants, hp colours, mouseX and Y, canvas 400x400? use lines and a rectangle, rectMode center or radius to center it, display which house is active
//image, base rgb, tailwind 500s of both, 600s of both
//gryff has red rose700 and yellow, slyth has neutral green700 and emerald, huff has yellow amber400 and zinc, and raven has sky blue600 and amber 700-800 
//maybe add one additional main colour for each
//figure out text, add style, center it somehow

function draw() {
  rectMode(CENTER);
  let gryff = [gold, [255, 0, 0], [234, 179, 8], [239, 68, 68], [202, 138, 4], [220, 38, 38], [185, 28, 28], [190, 18, 60], [225, 29, 72], [251, 191, 36], [250, 204, 21], [235, 121, 30]];
  let slyth = [silver, [0, 255, 0], [16, 185, 129], [115, 115, 115], [5, 150, 105], [82, 82, 82], [4, 120, 87], [21, 128, 61], [22, 163, 74], [163, 163, 163], [161, 161, 170], [85, 156, 138]];
  let huff = [[0, 0, 0], [255, 255, 0], [234, 179, 8], [113, 113, 122], [202, 138, 4], [82, 82, 91], [161, 98, 7], [251, 191, 36], [252, 211, 77], [161, 161, 170], [163, 163, 163], [213, 174, 55]];
  let raven = [bronze, [0, 0, 255], [14, 165, 233], [180, 83, 9], [2, 132, 199], [146, 64, 14], [3, 105, 161], [37, 99, 235], [59, 130, 246], [217, 119, 6], [245, 158, 11], [64, 140, 166]];
  const wG = [0.06, 0.1767, 0.2247, 0.3413, 0.3893, 0.506, 0.6227, 0.7393, 0.856, 0.904, 0.952, 1];
  const w = [0.05, 0.1667, 0.2833, 0.3333, 0.45, 0.5, 0.6167, 0.7333, 0.85, 0.9, 0.95, 1];
  //noStroke();
  if (mouseX <= 200 && mouseY < 200) {
    drawRect();
    fill(220, 38, 38);
    c = setColors(gryff, wG);
    t = "Gryffindor";
  } else if (mouseX > 200 && mouseY <= 200) {
    drawRect();
    fill(5, 150, 105);
    c = setColors(slyth, w);
    t = "Slytherin";
  } else if (mouseX < 200 && mouseY >= 200) {
    drawRect();
    fill(202, 138, 4);
    c = setColors(huff, w);
    t = "Hufflepuff";
  } else if (mouseX >= 200 && mouseY > 200) {
    drawRect();
    fill(2, 132, 199);
    c = setColors(raven, w);
    t = "Ravenclaw";
  }
  noStroke();
  text(t, 0, 0);
  pg.background(c);
  texture(pg);
  if (mouseIsPressed) {
    if ((mouseX < px1 || mouseX > px2) || (mouseY < py1 || mouseY > py2)) {
      translate(-200, -200);
      ellipse(mouseX, mouseY, 12, 12);
    }
  }
}
function doubleClicked() {
  clear();
  console.log(mouseX, mouseY);

}

function setColors(house, weights) {
  return house[find(weights, Math.random())];
}

function drawRect() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  rect(0, 0, 200, 50);
  strokeWeight(5);
  line(0, -200, 0, -25);
  line(0, 25, 0, 200);
  line(-200, 0, -100, 0);
  line(100, 0, 200, 0);
}

function find(arr, x, start = 0, end = arr.length) {
  if (end < start) return -1;
  else if (end == start) return end;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid + 1;
  else if (arr[mid] < x) return find(arr, x, mid + 1, end);
  else
    return find(arr, x, start, mid);
};
