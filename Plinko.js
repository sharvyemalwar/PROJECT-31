class Plinko{

    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
       // this.body = Bodies.rectangle(x,y,width,height,options);
        //this.width = width;
        //this.height = height;
        this.x=x;
        this.y=y;
        this.r=r;     
        this.body=Bodies.circle(this.x, this.y,this.r/2, options);
       // World.add(world, this.body);
       // this.body = Bodies;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, 10,10);
        ellipse(0,0,this.r, this.r);
      }



}




/*class Paper {
    constructor(x,y,r)
    {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:15.2          
        }
      this.x=x;
      this.y=y;
      this.r=r     
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body);
      this.image=loadImage("ball.png");
      
    }
    display()
    {       
        var paperpos=this.body.position;		
  
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        pop()
        
    }
  
  } 
  */


