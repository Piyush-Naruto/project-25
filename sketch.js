
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
function preload()
{
	var dustbin=loadImage("dustbin.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//paperObject = new Pop(200,200);
	ground = new Ground(width/2, height-35, width,10);
	rect1=new Box(750,600,180,130);
	//rect2=new Box(6505950,200,10);
	//rect3=new Box(550,580,10,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //paperObject.display();
  ground.display();
  rect1.display(false);
  //rect2.display();
  //rect3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   
	   Matter.Body.applyForce(paperObject,body,paperObject.body.position,{x:80,y:-85});
   
   }
   }