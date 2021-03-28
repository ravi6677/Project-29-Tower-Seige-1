class Block1{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

display(){
    var positionX = this.body.position.x;
    var positionY = this.body.position.y;
    var angle = this.body.angle;
    push();

    translate(positionX, positionY);
    rotate(angle);
    fill("midnightblue");

    stroke("black");
    strokeWeight(1);

    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
}
}