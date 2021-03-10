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
    }

    fly(){
        this.sling.bodyA = null;
    }

    attached(body){
    this.sling.bodyA = body

    }

    display(){
        image(this.sling1,250,20);
        image(this.sling2,220,10);
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<265){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y);
                image(this.sling3,pointA.x-25,pointA.y-5,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20,pointA.y,pointB.x+20,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-20,15,30);
            }
            }
            
    }

   
    
};