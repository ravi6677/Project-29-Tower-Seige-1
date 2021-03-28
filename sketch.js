const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, slingShot;
var b1, b2, b3, b4, b5, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15

function setup(){
    createCanvas(2500,1000);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(1000, 700, 100, 100);
    slingShot = new Slingshot(polygon.body, {x:100,y:200});
    stand = new Ground(240,805,160,25);

    b1 = new Block1(180,775,30,40);
    b2 = new Block1(210,775,30,40);
    b3 = new Block1(240,775,30,40);
    b4 = new Block1(270,775,30,40);
    b5 = new Block1(300,775,30,40);
    
    b6 = new Block2(195,735,30,40);
    b7 = new Block2(225,735,30,40);
    b8 = new Block2(255,735,30,40);
    b9 = new Block2(285,735,30,40);

    b10 = new Block3(210,695,30,40);
    b11 = new Block3(240,695,30,40);
    b12 = new Block3(270,695,30,40);

    b13 = new Block4(225,655,30,40);
    b14 = new Block4(255,655,30,40);
    
    b15 = new Block5(240,615,30,40);
}

function draw(){
    Engine.update(engine);
    background("black");
    polygon.display();
    slingShot.display();
    stand.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    b6.display();
    b7.display();
    b8.display();
    b9.display();

    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();

    b15.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}
