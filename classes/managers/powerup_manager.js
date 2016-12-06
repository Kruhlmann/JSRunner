function PowerupManager(player, VAR_LIB){
  this.powerups = [];
  this.internal_timer = 0;
  this.collision = false;
  this.player = player;
  this.width = VAR_LIB.width;
  this.height = VAR_LIB.height;

  this.xRanges = [];
  this.yRanges = [];
  for(var i = 0; i < this.width / 32; i ++) this.xRanges.push(i * 32);
  for(var i = 0; i < this.height / 32; i ++) this.yRanges.push(i * 32);

  this.update = function(delta){
    this.internal_timer += delta;

    for(var i = 0; i < this.powerups.length; i ++) {
      this.powerups[i].update(delta);

      if(this.powerups[i].x - this.player.x >= -this.player.w && this.powerups[i].x - this.player.x <= this.player.w){
        if(this.powerups[i].y - this.player.y >= -this.player.h && this.powerups[i].y - this.player.y <= this.player.h){
          if(this.player.canInterract){
            this.powerups[i].action();
            this.powerups.splice(i, 1);
          }
        }
      }
    }
    // Remove out of bounds powerups
    if(this.powerups.length > 0) if(this.powerups[0].y > this.height + 64) this.powerups.splice(0, 1);

    // Spawn a powerup every 15 rows
    if(this.internal_timer >= 32 * VAR_LIB.CONSTS.POWERUP_SPAWN_RATE){

      this.internal_timer -= 32 * VAR_LIB.CONSTS.POWERUP_SPAWN_RATE;
      if(VAR_LIB.occupiedSpaces.length < this.width / 32){
        ran_d = Math.floor(Math.random() * this.xRanges.length);
        loopChecker = 0;
        while(VAR_LIB.occupiedSpaces.indexOf(ran_d) > -1 && loopChecker < 500){
          ran_d = Math.floor(Math.random() * this.xRanges.length);
          loopChecker ++;
        }

        //Pick random ID to create powerup
        randId = Math.floor(Math.random() * VAR_LIB.CONSTS.POWERUP_IDS.length);
        this.powerups.push(new Powerup(this.xRanges[ran_d], -64, randId, VAR_LIB));
        VAR_LIB.occupiedSpaces.push(ran_d);
      }
    }
  }

  this.render = function(){
    for(var i = 0; i < this.powerups.length; i ++) {
      this.powerups[i].render();
      // Uncomment to get obstacle debug lines
      //stroke(50, 255, 50);
      //line(this.powerups[i].x, this.powerups[i].y, this.player.x, this.player.y);
    }
  }

}
