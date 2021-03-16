let width = 800;
let height = 600;

let balcony;
let balconyGlasses;
let balconyClear;
let desk;
let deskGlasses;
let kitchen;
let livingRoom;
let tv;
let tvGlasses;

let left;
let right;
let up;
let down;

let book;
let sofa;
let bottle;
let water;
let windows;
let chair;

// how many times clicked in each room
let clicked = 0;

// The level of the game. There should be 3 levels in total. 
let stage = 0;
// the room number of each room
let room = 0;

// load all the scene images
function preload(){
  balcony = loadImage('/Assets/balcony.jpg');
  balconyGlasses = loadImage('/Assets/balconyGlasses.jpg');
  balconyClear = loadImage('/Assets/balconyClear.jpg');
  desk = loadImage('/Assets/desk.jpg');
  deskGlasses = loadImage('/Assets/deskGlasses.jpg');
  kitchen = loadImage('/Assets/kitchen.jpg');
  livingRoom = loadImage('/Assets/livingRoom.jpg');
  tv = loadImage('/Assets/tv.jpg');
  tvGlasses = loadImage('/Assets/tvGlasses.jpg');
  
  left = loadImage('/Assets/left.png');
  right = loadImage('/Assets/right.png');
  up = loadImage('/Assets/up.png');
  down = loadImage('/Assets/down.png');
  
  book = loadSound('/Assets/book.mp3');
  windows = loadSound('Assets/window.mp3');
  sofa = loadSound('Assets/sofa.mp3');
  chair = loadSound('Assets/chair.mp3');
  water = loadSound('/Assets/water.mp3');
  bottle = loadSound('/Assets/bottle.mp3');
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  //start page
  if (stage == 0 && room == 0){
    background(0);
    textAlign(CENTER);
    fill(255);
    textSize(width / 25);
    text('Where did I put my glasses?', width / 2, height * 1 / 3);
    textSize(width / 32);
    
    text('I need to find my glasses by clicking', width / 2 , height * 1 / 2);
    text('without messing up the whole room', width / 2, height * 11 / 20)
    
    text('Click to start', width / 2, height * 2 / 3);
  }
  
  // stage 0 living room
  if (stage == 0 && room == 2){
    imageMode(CENTER);
    image(livingRoom, width / 2, height / 2, width, height);
    
    // go to balcony
    imageMode(CENTER);
    image(left, width * 1 / 20, height / 5, 30, 40);
    textAlign(LEFT);
    
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the balcony', width / 10, height * 3 / 20, width / 7, height / 10);
    
    // go to the TV
    imageMode(CENTER);
    image(left, width * 1 / 20, height * 9 / 10, 30, 40);
    textAlign(LEFT);
    
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the TV', width / 10, height * 17 / 20, width / 7, height / 10);
    
    // go to the bedroom
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the bedroom', width * 3 / 4, height * 9 / 10);
    
    imageMode(CENTER);
    image(down, width * 3 / 4, height * 19 / 20, 40, 30);
    
    // go to the kitchen
    imageMode(CENTER);
    image(right, width * 19 / 20, height / 2, 30, 40);
    
    textAlign(LEFT);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the kitchen', width * 16 / 20, height * 9 / 20, width / 7, height / 10);
  }
  
  // stage 0 bedroom
  if (stage == 0 && room == 1){
    imageMode(CENTER);
    image(desk, width / 2, height / 2, width, height);
    
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the living room', width / 2, height * 9 / 10);
    
    // the down arrow
    imageMode(CENTER);
    image(down, width / 2, height * 19 / 20, 40, 30);
  }
  
  
  //stage 0 balcony
  if (stage == 0 && room == 3){
    imageMode(CENTER);
    image(balconyGlasses, width / 2, height / 2, width, height);
    
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the living room', width / 2, height * 9 / 10);
    
    imageMode(CENTER);
    image(down, width / 2, height * 19 / 20, 40, 30);
  }
  
  //stage 0 TV
  if (stage == 0 && room == 4){
    imageMode(CENTER);
    image(tv, width / 2, height / 2, width, height);
    
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the living room', width / 2, height * 9 / 10);
    
    imageMode(CENTER);
    image(down, width / 2, height * 19 / 20, 40, 30);
  }
  
  //stage 0 kitchen
  if (stage == 0 && room == 5){
    imageMode(CENTER);
    image(kitchen, width / 2, height / 2, width, height);
    
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('Go to the living room', width / 2, height * 9 / 10);
    
    imageMode(CENTER);
    image(down, width / 2, height * 19 / 20, 40, 30);
  }
  
  if (stage == 0 && room == 6){
    imageMode(CENTER);
    image(balconyClear, width / 2, height / 2, width, height);
    
    textAlign(CENTER);
    textSize(width / 32);
    stroke(0);
    fill(255);
    text('The world finally becomes clear again...', width / 2, height * 9 / 10);
  }
  
  if (clicked > 5){
    background(0);
    
    textAlign(CENTER);
    textSize(width / 20);
    fill(255);
    text('Game over', width / 2, height / 3);
    
    textSize(width / 32);
    text('I messed up the whole room...', width / 2, height * 2 / 3);
  }
}

function mouseClicked(){
  //start page
  if (stage == 0 && room == 0){
    room = 1;
  }
  
  //bedroom
  if (stage == 0 && room == 1){
    console.log(mouseX, mouseY);
    if (dist(mouseX, mouseY, width * 1 / 2, height * 19 / 20) < height * 1 / 20){
      room = 2;
      // reset click number when entering another room;
      clicked = 0;
    } else if (dist(mouseX, mouseY, width * 1 / 4, height * 7 / 12) < height / 20) {
      bookPlay();
      clicked++;
    } else if (dist(mouseX, mouseY, width * 1 / 10, height * 9 / 12) < height / 10) {
      chairPlay();
      clicked++;
    } else if (dist(mouseX, mouseY, width * 15 / 16, height * 1 / 3) < height / 10) {
      windowPlay();
      clicked++;
    }
    else {
      //add click number when don't click on glasses
      clicked++;
    }
  }
  
  //living room
  if (stage == 0 && room == 2){
    console.log(mouseX, mouseY);
    //go to the bedroom
    if (dist(mouseX, mouseY, width * 3 / 4, height * 19 / 20) < height * 1 / 20){
      room = 1;
      clicked = 0;
    } 
    
    //balcony
    else if(dist(mouseX, mouseY,  width * 1 / 20, height / 5) < height * 1 / 20){
      room = 3;
      clicked = 0;
    }
    
    //tv
    else if(dist(mouseX, mouseY,  width * 1 / 20, height * 9 / 10) < height * 1 / 20){
      room = 4;
      clicked = 0;
    }
    
    //kitchen
    else if(dist(mouseX, mouseY,  width * 19 / 20, height / 2) < height * 1 / 20){
      room = 5;
      clicked = 0;
    }
    
    else if (dist(mouseX, mouseY,  width * 1 / 4, height * 3 / 4) < height * 1 / 8){
      bottlePlay();
      clicked++;
    }
    else if(dist(mouseX, mouseY,  width * 1 / 2, height * 2 / 3) < height * 1 / 5){
      sofaPlay();
      clicked++;
    }
    else{
      clicked++;
    }
  }
  
  //balcony
  if (stage == 0 && room == 3){
    console.log(mouseX);
    console.log(mouseY);
    if (dist(mouseX, mouseY, width / 2, height * 19 / 20) < height * 1 / 20){
      room = 2;
      clicked = 0;
    }else if (dist(mouseX, mouseY, width * 7 / 32, height * 8 / 15) < height * 1 / 20){
      room = 6;
      clicked = 0;
    } else if (dist(mouseX, mouseY, width * 11 / 16, height * 1 / 2) < height * 1 / 15) {
      bookPlay();
      clicked++;
    } else if (dist(mouseX, mouseY, width * 5 / 16, height * 1 / 6) < height * 1 / 10) {
      windowPlay();
      clicked++;
    }
    else {
      clicked++;
    }
  }
  
  //tv
  if (stage == 0 && room == 4){
    console.log(mouseX, mouseY);
    if (dist(mouseX, mouseY, width / 2, height * 19 / 20) < height * 1 / 20){
      room = 2;
      clicked = 0;
    } else if (dist(mouseX, mouseY, width * 3 / 8, height * 3 / 4) < height * 1 / 20){
      bottlePlay();
      clicked++;
    } else if (dist(mouseX, mouseY, width * 11 / 16, height * 5 / 6) < height * 1 / 20){
      bookPlay();
      clicked++;
    }
    else if (dist(mouseX, mouseY, width * 3 / 8, height * 11 / 12) < height * 1 / 20){
      bookPlay();
      clicked++;
    }
    else{
      clicked++;
    }
  }
  
  //kitchen
  if (stage == 0 && room == 5){
    console.log(mouseX, mouseY);
    if (dist(mouseX, mouseY, width / 2, height * 19 / 20) < height * 1 / 20){
      room = 2;
      clicked = 0;
    } else if (dist(mouseX, mouseY, width * 3 / 16, height * 5 / 12) < height * 1 / 10) {
      clicked++;
      waterPlay();
    } else if ((dist(mouseX, mouseY, width  * 9 / 16, height / 2) < height * 1 / 10)){
      clicked++;
      bottlePlay();
    } else if ((dist(mouseX, mouseY, width  * 1 / 8, height / 6) < height * 1 / 10)){
      clicked++;
      windowPlay();
    }
    else {
      clicked++;
    }
  }
}

function bookPlay(){
  if (!book.isPlaying()){
    book.play();
  }
}

function bottlePlay(){
  if(!bottle.isPlaying()){
    bottle.play();
  }
}

function windowPlay(){
  if(!windows.isPlaying()){
    windows.play();
  }
}

function waterPlay(){
  if(!water.isPlaying()){
    water.play();
  }
}

function chairPlay(){
  if(!chair.isPlaying()){
    chair.play();
  }
}

function sofaPlay(){
  if(!sofa.isPlaying()){
    sofa.play();
  }
}