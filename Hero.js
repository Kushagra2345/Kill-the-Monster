class Hero{

    constructor(x,y,w,h){

        this.x=x
        this.y=y
        this.width=w 
        this.height=h

        var options={
            isStatic:false
        }

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)

       
        

        this.image=loadImage("superhero1.png")
        World.add(world,this.body)
    }

    display(){

        push()

        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

        pop()


    }

}