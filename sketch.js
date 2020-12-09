const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var divi1,divi2,divi3,divi4,divi5,divi6;
var plinko1;

var ground1;


function setup() {
  var canvas = createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(240,580);
  divi1=new Division(70,476);
  divi2=new Division(140,476);
  divi3=new Division(210,476);
  divi4=new Division(280,476);
  divi5=new Division(350,476);
  divi6=new Division(420,476);

  plinko1 = new Plinko(40,150,5);
  plinko2 = new Plinko(70,150,5);
  plinko3 = new Plinko(100,150,5);
  plinko4 = new Plinko(130,150,5);
  plinko5 = new Plinko(160,150,5);
  plinko6 = new Plinko(190,150,5);
  plinko7 = new Plinko(220,150,5);
  plinko8 = new Plinko(250,150,5);
  plinko9 = new Plinko(280,150,5);
  plinko10 = new Plinko(310,150,5);
  plinko11 = new Plinko(340,150,5);
  plinko12 = new Plinko(370,150,5);
  plinko13 = new Plinko(400,150,5);
  plinko14 = new Plinko(430,150,5);
  plinko15 = new Plinko(460,150,5);
  plinko16 = new Plinko(55,185,5);
  plinko17 = new Plinko(85,185,5);
  plinko18 = new Plinko(115,185,5);
  plinko19 = new Plinko(145,185,5);
  plinko20 = new Plinko(175,185,5);
  plinko21 = new Plinko(205,185,5);
  plinko22 = new Plinko(235,185,5);
  plinko23 = new Plinko(265,185,5);
  plinko24 = new Plinko(295,185,5);
  plinko25 = new Plinko(325,185,5);
  plinko26 = new Plinko(355,185,5);
  plinko27 = new Plinko(385,185,5);
  plinko28 = new Plinko(415,185,5);
  plinko29 = new Plinko(445,185,5);
  

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0); 
  
  divi1.display(); 
  divi2.display();
  divi3.display();
  divi4.display();
  divi5.display();
  divi6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();




  ground1.display(); 
  drawSprites();
}