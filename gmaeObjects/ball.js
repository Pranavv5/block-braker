class ball{
  constructor(loc,r,col){
    this.location=loc;
    this.radius=r;
    this.color=col;
    let temp=8/this.radius;
    this.velocity=createVector(5,5);
    this.velocity.mult(temp);
    this.acceleration=createVector(0,0);
  }
  //updates the ball's location
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.constrain();
  }
  //makes it bounce off from edges and also calls collide function in mechanics.js
  constrain(){
    if(this.location.x+this.radius>=width){
      this.velocity.x*=-1;
    }
    if(this.location.x-this.radius<=0){
      this.velocity.x*=-1;
    }
    if(this.location.y+this.radius>=height){
      this.velocity.y*=-1;
    }
    if(this.location.y-this.radius<=0){
      this.velocity.y*=-1;
    }
    collide();
  }
  //applies force to the ball. currently this function is not being called anywhere in the game
   applyForce(f){
     let temp=1000/thisradius;
     f.mult(temp);
    this.acceleration.add(f);
  }

   show(){
    push();
    ellipseMode(CENTER);
    fill(this.color.x,this.color.y,this.color.z);
    circle(this.location.x,this.location.y,this.radius);
    pop();
  }
}