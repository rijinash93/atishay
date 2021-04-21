
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
    

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	

	engine = Engine.create();
	world = engine.world;


	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//Create the Bodies Here.

	boxPosition=width/2-100;
	boxY=610;

	boxleftSprite=createSprite(boxPosition+450,boxY,20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody=Bodies.rectangle(boxPosition,boxY+45,20,100,{isStatic:true});
	World.add(world,boxLeftBody);
	
	boxBase=createSprite(boxPosition+350,boxY+40,200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody=Bodies.rectangle(boxPosition+200,boxY+45-20,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxRightSprite=createSprite(boxPosition+250,boxY,20,100);
	boxRightSprite.shapeColor=color(255,0,0);
	
	boxRightBody=Bodies.rectangle(boxPosition+200,boxY,20,100,{isStatic:true});
	World.add(world,boxRightBody);
	
	paper=new Paper(100,600,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}
