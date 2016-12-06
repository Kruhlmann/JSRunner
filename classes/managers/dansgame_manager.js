function DansGameManager(player, VAR_LIB){
  this.dansgames = [];
  this.collision = false;
  this.player = player;
  this.width = VAR_LIB.width;
  this.height = VAR_LIB.height;

  this.xRanges = [];
  this.yRanges = [];
  for(var i = 0; i < this.width / 32; i ++) this.xRanges.push(i * 32);
  for(var i = 0; i < this.height / 32; i ++) this.yRanges.push(i * 32);

  this.update = function(delta){

    for(var i = 0; i < this.dansgames.length; i ++) {
      this.dansgames[i].update(delta);
      if(this.dansgames[i].x - this.player.x >= -this.player.w && this.dansgames[i].x - this.player.x <= this.player.w){
        if(this.dansgames[i].y - this.player.y >= -this.player.h && this.dansgames[i].y - this.player.y <= this.player.h){
          if(!this.player.isInvunrable && this.player.canInterract){
            this.player.isAlive = false;
            console.log("Collision with DansGame #" + i);
          }
        }
      }
    }
    // Remove out of bounds dansgames
    if(this.dansgames.length > 0) if(this.dansgames[0].x > this.width + 64) this.dansgames.splice(0, 1);


  }

  this.spawnWave = function(){
    newXRanges = VAR_LIB._shuffle(this.xRanges);
    this.dansgames.push(new DansGame(newXRanges[0], this.height + 64));
    this.dansgames.push(new DansGame(newXRanges[1], this.height + 64));
    this.dansgames.push(new DansGame(newXRanges[2], this.height + 64));
    this.dansgames.push(new DansGame(newXRanges[3], this.height + 64));
  }

  this.render = function(){
    for(var i = 0; i < this.dansgames.length; i ++) {
      this.dansgames[i].render();
      // Uncomment to get kappa debug lines
      //stroke(255, 50, 50);
      //line(this.dansgames[i].x, this.dansgames[i].y, this.player.x, this.player.y);
    }
  }

}
