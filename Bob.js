class bob{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8,
         
      }
      
      this.body=Bodies.circle(x,y,radius,options)
      this.width=x
      this.height=y
      this.radius=radius
      World.add(world,this.body)
    }

      display() {
          var pos=this.body.position
          push()
          translate(pos.x,pos.y) 
          fill("yellow") 
          rectMode(CENTER)
          ellipse(0,0,this.radius,this.radius)
          pop() 
      }


    
}