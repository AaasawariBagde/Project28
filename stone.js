class stone{
    constructor(x,y,r)
    {
      var options={
        isStatic:false,
        restitution :0,
        friction :1,
        density:1.2 
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("stone.png");
      this.body=Bodies.rectangle(x,y,r,r, options)
		World.add(world, this.body);
    }

    display()
    {
        var angle=this.body.angle;	
		push()
		translate(this.body.position.x, this.body.position.y);
		// rectMode(CENTER);
		rotate(angle)
		fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
}