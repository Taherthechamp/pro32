class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1.0
      }
      this.Visibility=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      strokeWeight(4)
      stroke("red")
        fill(48,78,70);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        push()
        this.Visibility=this.Visibility-5
        tint(255,this.Visibility);
        strokeWeight(4)
        stroke("red")
          fill(48,78,70);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)
        World.remove(world,this.body)
        pop()
      }
      }
      score(){
        if(this.Visibility<0 && this.Visibility >-105){
          score++
        }
      }  
    }
  