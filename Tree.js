class Tree{
    constructor(x,y,width,height){

       this.body = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
       this.image = loadImage("spritesPlucking mangoes/stone.png");
       World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       rect(pos.x,pos.y,this.width,this.height);
       image(this.image, 0, 0, this.width, this.height);
    }
}