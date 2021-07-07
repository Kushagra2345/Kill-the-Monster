class Box{

    constructor(x,y){

        this.x=x
        this.y=y

        var options={
            isStatic:false
        }

        this.body=Bodies.rectangle(this.x,this.y,70,70,options)

        World.add(world,this.body)

    }

    display(){
        push()

        fill("yellow")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,70,70)
       

        pop()
    }
}