class Ground{
    constructor(x,y,width,height){
      var options={
        density:1,
           isStactic:true,
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;

      World.add(world,this.body)
    }
    display(){
    
    rectMode(CENTER)

    fill(255)

    rect(this.body.positionX,this.body.positionY,this.width,this.height)
    }
}