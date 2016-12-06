function MegaLULManager(player, VAR_LIB){
  this.megaluls = [];
  this.collision = false;
  this.player = player;
  this.width = VAR_LIB.width;
  this.height = VAR_LIB.height;

  this.update = function(delta){

    for(var i = 0; i < this.megaluls.length; i ++) {
      this.megaluls[i].update(delta);
      if(this.megaluls[i].x - this.player.x >= -this.player.w && this.megaluls[i].x - this.player.x <= this.player.w){
        if(this.megaluls[i].y - this.player.y >= -this.player.h && this.megaluls[i].y - this.player.y <= this.player.h){
          if(!this.player.isInvunrable && this.player.canInterract){
            this.player.isAlive = false;
            console.log("Collision with MEGALUL #" + i);
          }
        }
      }
    }
    // Remove out of bounds megaluls
    if(this.megaluls.length > 0) if(this.megaluls[0].x > this.width + 64) this.megaluls.splice(0, 1);


  }

  this.spawnWave = function(){
    this.megaluls.push(new MegaLUL(VAR_LIB));
  }

  this.render = function(){
    for(var i = 0; i < this.megaluls.length; i ++) {
      this.megaluls[i].render();
      // Uncomment to get kappa debug lines
      //stroke(255, 50, 50);
      //line(this.megaluls[i].x, this.megaluls[i].y, this.player.x, this.player.y);
    }
  }

}
