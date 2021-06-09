var bgImg;
var cat;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImage1 = loadAnimation("images/cat1.png")
    mouseImage1 = loadAnimation("images/mouse1.png")
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
mouse = createSprite(200,600)
cat.addAnimation("cat1", catImage1)
mouse.addAnimation("mouse1", mouseImage1)
cat.scale = 0.2
mouse.scale = 0.2
}


function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX = 0
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("cat2", catImage2)
    cat.changeAnimation("cat2", catImage2)
    mouse.addAnimation("mose2", mouseImage2)
    mouse.changeAnimation("mouse2", mouseImage2)
}
}
