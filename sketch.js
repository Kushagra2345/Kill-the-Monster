const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box=[]

var gameState="TRYING"


function preload() {
//preload the images here

backgroundImg1=loadImage("gamingbackground1.jpg")
backgroundImg2=loadImage("gamingbackground2.png")

}

function setup() {
  createCanvas(3000, 800);

  engine=Engine.create()
  world=engine.world;

  destroyedSound=loadSound("sound/train_crossing.mp3")
  // create sprites here
   
  platform1=new Ground(0,550,2700,30)
  hero=new Hero(320,320,300,100)

  rope1=new Rope({x:280,y:200},hero.body)

  monster=new Monster(1300,300,200,200)

  box1 = new Box(500, 400, 70, 70);
  box2 = new Box(600, 400, 70, 70);
  box3 = new Box(700, 400, 70, 70);
  box4 = new Box(800, 400, 70, 70);
  box5=  new Box(550, 300, 70, 70);
  box6=  new Box(650, 300, 70, 70);
  box7=  new Box(750, 300, 70, 70);
  box8=  new Box(600, 200, 70, 70);
  box9=  new Box(700, 200, 70, 70);
  box10= new Box(650, 100, 70, 70);




}



function draw() {
  background(backgroundImg1);

 
  
 
 
  Engine.update(engine)


  if (gameState==="TRYING"){
    fill("blue")
    textSize(30)
    text("Don't Allow the Monster to cross the red line.",100,100)
    text("PRESS SPACE IF U ARE READY.",100,200)
  }
 
  if (gameState==="PLAY"){ 
   
 
      if (monster.body.position.y>600 && monster.body.velocity.y>0){

      gameState="WIN"
    
      }

      if (monster.body.position.x<900&& monster.body.position.y<600){
    
      gameState="LOSE"
  
      }

    }

    if (gameState!=="TRYING"){
      if (frameCount%100===0){
        Matter.Body.applyForce(monster.body,monster.body.position,{x:-1,y:0})
      }
    }
console.log(gameState)

 


  if (gameState==="WIN"){
    textSize(30)
    fill("green")
    text("You Win!!!!!",1200,200)
  }

 
  if (gameState==="LOSE"){
    textSize(30)
    text("You LOSE!!!!!",1200,200)
    text("THE WORLD IS DESTROYED BY THE MONSTER.",800,500)

    if (frameCount%30===0){
    destroyedSound.play()
    }

    World.remove(world,hero.body)
  }

  stroke("red")
  line(835 ,0,835 ,height)
  
  platform1.display()
  hero.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  monster.display()
  rope1.display()
}

function mouseDragged(){
  if (gameState!=="TRYING"){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }
}

function keyPressed(){
  if (gameState==="TRYING" && keyCode===32){
    gameState="PLAY"
  }
}