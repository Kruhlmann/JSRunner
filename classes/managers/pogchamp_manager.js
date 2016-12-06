function PogChampManager(player, VAR_LIB){
  this.pogchamps = [];
  this.internal_timer = 0;
  this.collision = false;
  this.player = player;
  this.width = VAR_LIB.width;
  this.height = VAR_LIB.height;

  this.update = function(delta){
    this.internal_timer += delta;

    for(var i = 0; i < this.pogchamps.length; i ++) {
      this.pogchamps[i].update(delta);
      if(this.pogchamps[i].x - this.player.x >= -this.player.w && this.pogchamps[i].x - this.player.x <= this.player.w){
        if(this.pogchamps[i].y - this.player.y >= -this.player.h && this.pogchamps[i].y - this.player.y <= this.player.h){
          if(!this.player.isInvunrable && this.player.canInterract){
            this.player.isAlive = false;
            console.log("Collision with PogChamp #" + i);
          }
        }
      }
    }
    // Remove out of bounds pogchamps
    if(this.pogchamps.length > 0) if(this.pogchamps[0].y > this.height + 64) this.pogchamps.splice(0, 1);
  }


  this.spawnWave = function(){
    this.pogchamps.push(new PogChamp(-32, -32, 1));
    this.pogchamps.push(new PogChamp(this.width - 128, -32, -1));
  }

  this.render = function(){
    for(var i = 0; i < this.pogchamps.length; i ++) {
      // Uncomment to get pogchamp debug lines
      //fill(255, 0, 0);
      //rect(this.pogchamps[i].x, this.pogchamps[i].y, this.pogchamps[i].w, this.pogchamps[i].h)
      this.pogchamps[i].render();
      //stroke(255, 50, 50);
      //line(this.pogchamps[i].x, this.pogchamps[i].y, this.player.x, this.player.y);
    }
  }

}
