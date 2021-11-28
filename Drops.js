class drops {
    constructor(x,y,radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,{isStatic: false,friction:0.1})
        World.add(world,this.body);
    }
    update() {
        if(this.body.position.y>=500){   
            Matter.Body.setPosition(this.body, 
                {x: random(0,400), y: 0});
        }
    }
    display() {
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}