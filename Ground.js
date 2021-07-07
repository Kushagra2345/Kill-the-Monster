class Ground{

    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.width=w
        this.height=h

        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)

        World.add(world,this.body)
    }

    display(){
        push()
        fill("white")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
}