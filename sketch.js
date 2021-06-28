const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine , world;
var paper;
var ground;
var leftSide,bottom,rightSide;
var backgroundImg;
var paperImg;
var dustbinImg,dust;



function preload(){

backgroundImg=loadImage("back2.jpg");
dustbinImg=loadImage("dustbinim.png");
	
}

function setup() {
      engine = Engine.create();
	  world = engine.world;
	
	 canvas=	createCanvas(800,600);


	 engine = Engine.create();
	 world = engine.world;

	 //Create the Bodies Here.
		
  	 ground = new Ground (400,590,800,20);
	
	 paper = new Paper (200,100,10);
	 World.add(world,paper);
	
	

	 dust=createSprite(612,510,20,20);
     dust.addImage(dustbinImg)
	 dust.scale=0.45;
	




	 leftSide= new Dustbin (558,510,10,140);
	 bottom = new Dustbin (610,575,100,10);
	 rightSide= new Dustbin (665,510,10,140);
	
	 slingShot = new Slingshot(paper.body,{x:200,y:100});

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(backgroundImg);
  Engine.update(engine);

  ground.display();
 
  leftSide.display();
  bottom.display();
  rightSide.display();
  
  paper.display(); 
 

  drawSprites();
  slingShot.display();
 
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}
