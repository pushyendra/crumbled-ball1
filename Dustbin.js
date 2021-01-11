class Dustbin{
    constructor(x,y,width,height){
        var options={
            restitution:0,
            friction:1,
            density:0.1,
            isStactic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
         this.width=width
         this.height=height

         World.add(world,this.body)

    }
      display(){
          rectMode(CENTER);

        fill("green")

     rect(this.body.positionX,this.body.positionY,width,height)

      }


}