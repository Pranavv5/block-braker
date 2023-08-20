function collide(){
  // blocks collision still work in progress
  for(let blok of blocks){
    for(let bl of blok){
      if(collideRectCircleVector(bl.location,createVector(bl.width,bl.height),bol.location,bol.radius)){
        let center=createVector(bl.location.x+bl.width*0.5,bl.location.y+bl.height*0.5);
        if(bol.location.y>=bl.location.y+bl.height)
          bol.velocity.y*=-1;
        if(bol.location.y>=bl.location.y && bol.location.y<=(bl.location.y+bl.height))
          bol.velocity.x*=-1;
        if(bol.location.y<=bl.location.y)
          bol.velocity.y*=-1;
        bl.location=createVector(9999,9999);
        let x = random(1);
        if(x<0.2 && power==0){
          power = new drop(bol.location.copy());
        }
      }
    }
  }
  //plate collision
  if(collideRectCircleVector(plate.location,createVector(plate.width,plate.height),bol.location,bol.radius)){
    bol.velocity.y*=-1;
  }
}