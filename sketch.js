const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
//const Engine = Matter.Engine
//const World= Matter.World
//const Bodies = Matter.Bodies

var engine, world;
var tanker;
var ground;

function setup() {
   var canvas = createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(700,380,70,70);
    ground = new Ground(800, height, 800, 20);


}

function draw() {
    background("black");
    Matter.Engine.update(engine);
    tanker.display();
    ground.display();  
}


function keyReleased() {
    // Call the shoot method for the cannon.
}