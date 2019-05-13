  function obst() {
    this.x = w;
    this.y = h/2;
    this.gravity = 1.5;
    this.velocity = 0;
    
    this.show = function() {
      image(bg,this.x,this.y,127,100)
    };
    
    this.update = function() {
      //velocity incrases as gravity increases
      this.velocity += this.gravity;
      //the position of the box subtracts because of the velocity
      this.x -= this.velocity;
      //take the velocity and times it by 0.8
      this.velocity *= 0.8;
      
      //obstacle hits jumper
      hit = collideRectRect(this.x,this.y,127,100,jumper.x,jumper.y,70,100);
      //both obstacles hit each other
      res = collideRectRect(this.x,this.y,127,100,obst2.x,obst2.y,127,100);
      
        //if the obstacle hits the jumper stop
        if (hit === true) {
          noLoop();
        }
        
        //if both obstacles hit each other send the first obstacle back to the start
        if (res === true) {
          this.x = w;
        }
      
      //if the obstacles passes the left side of the screen plus the size of the obstacle then
      if (this.x < -50) {
        //send it back to the right side of the screen plus the size of the obstacle
        this.x = w+50;
        //then randomize it's height
        this.y = Math.floor(Math.random()*h);
        //reset the velocity of the obstacle
        this.velocity = 0;
        //increase gravity each time this happens
        this.gravity += 0.25;
        //add one to the score
        s += 1;
      }
    };
  }//object ends here