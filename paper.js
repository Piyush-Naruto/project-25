class Pop{
    constructor(x, y) {
    this.x= x;
    this.y = y;
    Matter.Bodies.circle(x, y) 
    this.image = loadImage("paper.jpg"); 
    World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };