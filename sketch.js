
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,15);
	mango2=new mango(1010,200,30);
	mango3=new mango(1200,330,20);
	mango4=new mango(1000,50,30);
	mango5=new mango(890,150,25);
	mango6=new mango(870,250,27);
	mango7=new mango(1100,300,30);
	mango8=new mango(1200,200,15);
	mango9=new mango(1000,300,30);
	mango10=new mango(1100,200,30);

	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(235,420,20);
	rope = new Rope(stoneObj.body,{x:250,y:450})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  groundObject.display();
  rope.display();

 detectCollision(stoneObj,mango1);
 detectCollision(stoneObj,mango2);
 detectCollision(stoneObj,mango3);
 detectCollision(stoneObj,mango4);
 detectCollision(stoneObj,mango5);
 detectCollision(stoneObj,mango6);
 detectCollision(stoneObj,mango7);
 detectCollision(stoneObj,mango8);
 detectCollision(stoneObj,mango9);
 detectCollision(stoneObj,mango10);

}


function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	rope.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		rope.attach(stoneObj.body)	;	
	}
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}