class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.a=loadImage("sprites/sling1.png")
        this.b=loadImage("sprites/sling2.png")
        this.c=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.a,100,118,50,100)
        image(this.b,65,115,50,60)
        

        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.c,pointA.x-20,pointA.y,10,10)
            push();
            strokeWeight(4);
          stroke("#301608")
          if(this.sling.bodyA.position.x <85){
            line(pointA.x-15, pointA.y, pointB.x-105, pointB.y+35);
              strokeWeight(2)
              line(pointA.x-15, pointA.y, pointB.x-50, pointB.y+26);
                                   }
          line(pointA.x-15, pointA.y, pointB.x-105, pointB.y+35);
            line(pointA.x-15, pointA.y, pointB.x-50, pointB.y+26);
            pop();
        }
    }
    
}