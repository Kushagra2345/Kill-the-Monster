class Monster{

    constructor(x,y,w,h){

        this.x=x
        this.y=y
        this.width=w 
        this.height=h

        var options={
            isStatic:false
        }

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)

        this.image=loadImage("monster1.png")
    }

    display(){

        push()

        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.width,this.height)
     
        pop()


    }

}