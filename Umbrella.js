class umbrella {
    constructor(x,y,radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,{isStatic: "true"})
        World.add(world,this.body);
        this.image = loadImage("the41images/images/walking/walking_1.png");
    }
    display() {
        image(this.image,this.x-150,this.y-100,this.radius*4,this.radius*4)
    }
}