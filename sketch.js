const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var theumbrella;
var thedrops=[];
var thunder;
var thunder1, thunder2, thunder3, thunder4
function preload(){
    thunder1 = loadImage("the41images/images/thunderbolt/1.png");
    thunder2 = loadImage("the41images/images/thunderbolt/2.png");
    thunder3 = loadImage("the41images/images/thunderbolt/3.png");
    thunder4 = loadImage("the41images/images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(800,800)
    engine = Engine.create();
    world = engine.world;
    theumbrella = new umbrella(200,400,75)
    for(var i=0;i<100;i++) {
        thedrops.push(new drops(random(0,400),random(0,400),7))
    }
    thunder = createSprite(random(0,400),0,50,50)
    thunder.addImage(thunder3)
}

function draw(){
    background("black");
    Engine.update(engine);
    theumbrella.display()
    for (var i=0;i<100;i++) {
        thedrops[i].display()
        thedrops[i].update()
    }
    var rvariable=Math.round(random(1,4));
    thunder.scale = 0.3;
    if (frameCount%60===0) {
        thunder.x=random(0,400);
        switch (rvariable) {
            case 1: thunder.addImage(thunder1);
            break
            case 2: thunder.addImage(thunder2);
            break
            case 3: thunder.addImage(thunder3);
            break
            case 4: thunder.addImage(thunder4);
            break
            default: break
        }
    }
    if(frameCount%60>48) {
    drawSprites();
    }
}