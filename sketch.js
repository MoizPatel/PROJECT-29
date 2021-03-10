const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  background("grey");
  
  createSprite(400, 200, 50, 50);
  ground1 = new Ground(400,390,800,20);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

 // block = new Hexagon(200,200);
 // slingShot1 =new SlingShot(block,{x:200,y:180});

}


function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground1.display();
  block.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   slingShot1.display();
   
  drawSprites();
} 

function mouseDragged()
{
	Matter.Body.setPosition(block.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	slingShot1.fly();
 
}