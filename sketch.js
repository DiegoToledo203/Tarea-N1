
let sketch;

function setup() {
  sketch = createCanvas(700, 400);
  sketch.parent("p5");
}

function draw() {

  for(let i = 0; i < 30; i++){
  stroke(random(265), random(265), random(265));
  strokeWeight(random(2, 20));
  point(random(width), random(height));
  }
}