//block class.
class block{
  constructor(loc,w,h,col){
    this.location=loc;
    this.width=w;
    this.height=h;
    this.color=col;
  }
  //prints the block on the screen
  show(){
    push();
    rectMode(CORNER);
    fill(this.color.x,this.color.y,this.color.z);
    rect(this.location.x,this.location.y,this.width,this.height);
    pop();
  }
}