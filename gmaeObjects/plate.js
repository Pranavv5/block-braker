//the plate that player controls
class platform{
  constructor(loc,w,h,col){
    this.location=loc;
    this.width=w;
    this.height=h;
    this.color=col;
  }
   show(){
    push();
    rectMode(CORNER);
    fill(255);
    this.location.x=mouseX;
    if(this.location.x+this.width>width){
      this.location.x=width-this.width;
    }
    if(this.location.x<0){
      this.location.x=0;
    }
    rect(this.location.x,this.location.y,this.width,this.height);
    pop();
  }
}