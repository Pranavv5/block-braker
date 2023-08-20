// the start menu screen
function startMenu(){
  //the main text on the screen
  push();
  textSize(40);
  textFont("helvetica");
  fill(100,200,100);
  text("BLOCK BREAKER!",width/2-170,height/4);
  pop();
  //showing the buttons on screen and checking if the mouse is colliding with any one of them
  // if colliding change the color of the rectangle
  for(let i =0;i<rectarr.length;i++){
     rectarr[i].show();
     rectarr[i].collide();
   }
}
// a class for the buttons. they take location, width, height, color, alpha(opacity)
//color of text and text offset to position it/
class rectgui{
  constructor(loc,w,h,t,col,a,textcol,textoff){
    this.location=loc;
    this.color=col;
    this.alpha=a;
    this.width=w;
    this.height=h;
    this.text=t;
    this.textcol=textcol;
    this.textoffset=textoff;
  }
  //sets the color,fontsize etc and prints the rectangle along with the text on the screen.
  show(){
    push();
    fill(this.color.x,this.color.y,this.color.z,this.alpha);
    rect(this.location.x,this.location.y,this.width,this.height);
    fill(this.textcol.x,this.textcol.y,this.textcol.z);
    textFont("helvetica");
    textSize(30);
    text(this.text,this.location.x+this.width/3-this.textoffset,this.location.y+this.height-15);
    pop();
  }
  // for the hover effect. checks if the mouse is colliding with the retangle. if it is then change color.
  collide(){
      if(collidePointRectVector(createVector(mouseX,mouseY),this.location,createVector(this.width,this.height))){
        this.color.z=100;
        return true;
      }
      else{
        this.color.z=255;
      }
}

}
function options(){
console.log("fsd");
}
function rules(){
console.log("in rulse");
}