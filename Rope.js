class Rope{

    constructor(pointA,bodyB){
      
      var options={ 
        pointA:pointA,
        bodyB:bodyB,
        stiffness:0.01
      }

      this.sling=Constraint.create(options)

      World.add(world,this.sling)
    }

    display(){

        push()
        var a=this.sling.pointA
        var b=this.sling.bodyB.position
        stroke("black")
        strokeWeight(0)
        line(a.x,a.y,b.x,b.y)

        pop()

    }




}