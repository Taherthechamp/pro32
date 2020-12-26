const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score=0
var bg,backgroundImage;

function preload() {
  GetBackground();
}

function setup() {
  createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

  ground1 = new ground(400,390,800,10);
  ground2 = new ground(400,300,200,10);
  block1 = new Box(330,275,30,40);
  block2 = new Box(360,275,30,40);
  block3 = new Box(390,275,30,40);
  block4 = new Box(420,275,30,40);
  block5 = new Box(450,275,30,40);
  block6 = new Box(480,275,30,40);
  block7 = new Box(360,235,30,40);
  block8 = new Box(390,235,30,40);
  block9 = new Box(420,235,30,40);
  block10 = new Box(450,235,30,40);
  block11 = new Box(390,195,30,40);
  block12 = new Box(420,195,30,40);
  block13 = new Box(405,155,30,40);
  hexagon = new polygon(100,200,20);
  sling = new Slingshot(hexagon.body,{x:135,y:200})
}

function draw() {
  if(backgroundImage)
   background(backgroundImage)
  textSize(20)
  text("score:"+score,700,40)
  Engine.update(engine);
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  hexagon.display();
  sling.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly()
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(hexagon.body, {x:100, y:200})
    sling.attach(hexagon.body);
  }
}
async function GetBackground(){
  var response=await fetch ("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responsejson=await response.json()
  var datetime=responsejson.datetime
  var hour=datetime.slice(11,13)
  console.log(hour)
  if(hour>=6 && hour<=19){
      bg="day.jpg"
  }
  else{
      bg="night.jpg"
  }
  backgroundImage=loadImage(bg)
  }