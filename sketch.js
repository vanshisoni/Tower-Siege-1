const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,20);

  stand1 = new Ground(390,300,250,10)

  ball = new Ball(50,200,20);

  sling = new Sling(ball.body,{x:100,y:200});

  
}

function draw() {
  background(0); 
  
  ground.display();
  
  stand1.display();

  ball.display();

  sling.display();
  
}