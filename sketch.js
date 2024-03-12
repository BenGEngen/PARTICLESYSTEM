let particles = [];
let numberOfParticles = 800;  
let gravity = 0.5;



let trunkLen =    275;   // length of the trunk
let windInc =     0.01;  // how quickly wind changes speed (try changing)

let windSpeed =   0;     // speed, which will = angle of bend
let noisePos =    0;     // "position" in the Perlin noise



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfParticles; i++ ){ // "for" loop fills the particle array
    particles[i] = new Particle(); //fill for "i" number of times
  }
}

function draw() {
  background(135,206,235); //sky blue background

  
  gravity = map(200, 0, height, 0, 3);
  console.log(gravity);
  
  // draw a simple tree
  push();
  translate(width/2, height);
  rotate(radians(windSpeed));
  stroke(139,69,19); // saddle brown RGB values
  strokeWeight(5);
  line(0,0, 0,-trunkLen);
  fill(65, 200, 45);
  noStroke();
  circle(0,-trunkLen, trunkLen); 
  pop();
  
  // update wind speed using Perlin noise
  // noise() returns a value 0 to 1, so * 30 means
  // the wind speed will result in an angle of 0-30 degrees.

  windSpeed = noise(noisePos) * 30;
  noisePos += windInc;

  for (let i = 0; i < particles.length; i++){
    particles[i].move();
    particles[i].display();
       
  }

}


class Particle {
  
  constructor() {
    this.width = 3; //
    this.height = 3; //determines the width and heighth
    this.x = random(width); //
    this.y = random(height); //
    this.xSpeed  = random(0.0, 2.7); // moves particles at a random speed from 0.0 to 2.7.
  }

  display(){
    
    noStroke();  //takes away border of rect
    rect(this.x, this.y, this.width, this.height, 20);

  }
  move(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + gravity;
    if (this.x > width){
      this.x = 0;
    }
    if(this.y > height){
      this.y = 0;
    }
  }
}


