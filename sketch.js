//block breaker game.
// Written by Gaurav Muglikar.
//random(),createVector() and functions native to p5 will only run in the setup and the draw functionss
// hence values of some variables are assigned in the setup.
//the array in which blocks are stored
var power = 0;
var blocks=[];
//number of rows of blocks
var rows=7;
//number of columns of blocks
var cols;
//the plate which player will control
var plate;
//the ball
var bol;
//width of each block
var blockwidth=30;
//height of each block
var blockheight=20;
//radius of the ball. currently being randomly assigned in the setup function
var ballradius;
//width of the plate
var platewidth=150;
//height of the plate
var plateheight=10;
//the choice variable that is used in flow control of GUI
var choice="startmenu";
//the array thar stores the three gui buttons of start menu
var rectarr=[];
//first three variables decide color of the start options and exit buttons while the
//textcol variables are to decide color of the text
var rectcol1,rectcol2,rectcol3,texgcol1,textcol2,textcol3;

function setup(){
  //colors for start menu rectangles
  rectcol1=createVector(150,150,150);
  rectcol2=createVector(55,55,55);
  rectcol3=createVector(15,15,15);
  //colors for start menu text in rectangles
  textcol1=createVector(0,0,0);
  textcol2=createVector(0,0,0);
  textcol3=createVector(0,0,0);
  //making the canvas
  createCanvas(1000,600,P2D);
  //pushing 3 rectangles start options and exit in array. takes location, width,
  //height, text,rectangle's color,rectangle's alpha value(or opacity), color of text
  //and offset of text from its location to center it. all values are hardcoded
  rectarr.push(new rectgui(createVector(width/2-100,height/2-50),200,50,"START",rectcol1,255,textcol1,10));
  rectarr.push(new rectgui(createVector(width/2-100,rectarr[0].location.y+rectarr[0].height+20),200,50,"OPTIONS",rectcol2,255,textcol2,30));
  rectarr.push(new rectgui(createVector(width/2-100,rectarr[1].location.y+rectarr[1].height+20),200,50,"EXIT",rectcol3,255,textcol3,0));
  //number of columns scales according to the width of the canvas and the width of each block
  cols=floor(width/blockwidth);
  ballradius=10;
  // called a function createBlocks that will make a 2d array of blocks to be displayed on screen
  createBlocks();
  //creating a ball. parameters are location radius and color of the ball
  bol=new ball(createVector(width/2,height-100),ballradius,createVector(random(width),random(width),random(width)));
  plate=new platform(createVector(width/2,height-50),platewidth,plateheight,createVector(255,255,255));

}

function createBlocks(){
  //inserting blocks into array//
  //the x and y are just placeholders for location of each block.each adjacent block's location will be the previous block's location plus
  //its width hence they stack up.the x and y start from 10 but u can change it to your liking
  //hence the first block's location will start from 10,10 and next one will be 10,20 and so on
  let x=10;
  let y=10;
  for(let i=0;i<rows;i++){
    //reassign value of x after drawing a line of blocks horizontally so each block is aligned vertically
    x=10;
    blocks.push([]);
    for(let j=0;j<cols;j++){
      // parameters of the block is location width,height and color of the block;
      blocks[i].push(new block(createVector(x,y),blockwidth,blockheight,createVector(random(255),random(255),random(225))));
      x+=blockwidth;
    }
    y+=blockheight;
  }
}

function draw(){
  //background color. ranges from 0 black and 255 white
  background(50);

  //perhaps we can make a
  //what is displayed on the screen depends on the choice variable. made it a string for readability

  switch (choice) {
    case "startmenu":{
      startMenu();
      break;
    }
    case "playgame":{
      gameLogic();
      break;
    }
    case "options":{
      options();
      break;
    }
    case "rules":{
      rules();
      break;
    }
    case "exit":{
      console.log("tt")
      noLoop();
      noCanvas();
      break;
    }
    default:{
      console.log("input"+choice+"is not a choice");
    }
  }
}


//the function that displays bricks on screen. just made it to make the gameLogic function look concsise
function showBricks(){
  for(let i=0;i<blocks.length;i++){
    for(let j=0;j<blocks[i].length;j++){
      blocks[i][j].show();
    }
  }
}
//the main game function calls. basically update the balls position, show the
// bricks, show the ball and show the plate. the plate's x coordinate is equal to
// the mouse's x coordinate and is handled in the plate.show function itself
function gameLogic(){
  bol.update();
  showBricks();
  bol.show();
  plate.show();
  if(power!= 0){
    power.update();
    power.show();
    power.collide();

  }
  checkWinCondition();
}
// in start menu when the mouse is clicked check for collision of mouse with each
// button and select the 'choice' variable's value accordingly. there is still the
// options and the rules pages missing
function mouseClicked(){
  for(let i=0;i<rectarr.length;i++){
    if(rectarr[i].collide()){
      if(i==0){
        choice="playgame";
      }
      if(i==1){
        choice="options";
      }
      if(i==2){
        choice="exit";
      }
    }
  }
}
//demo: keypresses. perform certain action when player presses a key. when user presses
// 'r' then the blocks will be refreshed when the user presses 's' the game goes back to start menu
//by changing the 'choice' variable
function keyPressed(){
  if(key=='r'){
    blocks=[];
    //creating a ball
    bol=new ball(
                  createVector(width/2,height-100),
                  ballradius,
                  createVector(random(width),random(width),random(width))
                );
    createBlocks();
  }
  if(key=='s'){
    choice="startmenu";
  }
}

function checkWinCondition(){

}