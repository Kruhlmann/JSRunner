function ObstacleManager(width, height, player){
  this.obstacles = [];
  this.internal_timer = 0;
  this.collision = false;
  this.player = player;
  this.width = width;
  this.height = height;

  this.xRanges = [];
  this.yRanges = [];
  for(var i = 0; i < this.width / 32; i ++) this.xRanges.push(i * 32);
  for(var i = 0; i < this.height / 32; i ++) this.yRanges.push(i * 32);

  this.update = function(delta){
    this.internal_timer += delta;

    for(var i = 0; i < this.obstacles.length; i ++) {
      this.obstacles[i].update(delta);
      if(this.obstacles[i].x - this.player.x >= -this.player.w && this.obstacles[i].x - this.player.x <= this.player.w)
        if(this.obstacles[i].y - this.player.y >= -this.player.h && this.obstacles[i].y - this.player.y <= this.player.h)
          this.player.isAlive = false;
    }
    // Remove out of bounds obstacles
    if(this.obstacles.length > 0) if(this.obstacles[0].y > this.height + 64) this.obstacles.splice(0, 1);

    if(this.internal_timer >= 32){
      this.internal_timer -= 32;
      this.obstacles.push(new Obstacle(this.xRanges[Math.floor(Math.random() * this.xRanges.length)], -64, loadImage("http://i.imgur.com/UEO0kYn.png")));
    }
  }

  this.render = function(){
    for(var i = 0; i < this.obstacles.length; i ++) {
      this.obstacles[i].render();
      // Uncomment to get obstacle debug lines 
      //stroke(255, 50, 50)
      //line(this.obstacles[i].x, this.obstacles[i].y, this.player.x, this.player.y)
    }
  }

}
