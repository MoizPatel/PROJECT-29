class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }
  display(){
    super.display();
    var pos =this.body.position;
     rectMode(CENTER);
     fill("yellow") ;
    rect(pos.x, pos.y, this.width, this.height);
  }

};
