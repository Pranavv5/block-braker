class drop{
  constructor(loc){
    this.location = loc;
    this.velocity = createVector(0,2);
    this.width=20;
    this.height=10;
  }
  update(){
    this.location.add(this.velocity);
  }
  show(){
    push();
    fill(255);
    rectMode(CORNER);
    rect(this.location.x,this.location.y,this.width,this.height);
    pop();
  }
  collide(){
    if(collideRectRectVector(this.location,createVector(this.width,this.height),plate.location,createVector(plate.width,plate.height))){
      plate.width+=10;
      this.location=99999;
      this.velocity.mult(0);
      power = 0;
      console.log(true);
    }
    if(this.location.y+this.height>=width){
      this.location=99999;
      this.velocity.mult(0);
      power = 0;
    }
  }
}