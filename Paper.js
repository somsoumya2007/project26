class Paper {
    constructor(){
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            
        }
    this.body= Bodies.circle(240,500,20,options);
    this.width=33;
    this.image=loadImage("paper.png")
     World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        fill("yellow");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    }
}