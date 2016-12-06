function WutFaceManager(player, VAR_LIB){
  this.wutfaces = [];
  this.collision = false;
  this.player = player;
  this.width = VAR_LIB.width;
  this.height = VAR_LIB.height;

  this.xRanges = [];
  this.yRanges = [];
  for(var i = 0; i < this.width / 32; i ++) this.xRanges.push(i * 32);
  for(var i = 0; i < this.height / 32; i ++) this.yRanges.push(i * 32);

  this.update = function(delta){

    for(var i = 0; i < this.wutfaces.length; i ++) {
      this.wutfaces[i].update(delta);
      if(this.wutfaces[i].x - this.player.x >= -this.player.w && this.wutfaces[i].x - this.player.x <= this.player.w){
        if(this.wutfaces[i].y - this.player.y >= -this.player.h && this.wutfaces[i].y - this.player.y <= this.player.h){
          if(!this.player.isInvunrable && this.player.canInterract){
            this.player.isAlive = false;
            console.log("Collision with WutFace #" + i);
          }
        }
      }
    }
    // Remove out of bounds wutfaces
    if(this.wutfaces.length > 0) if(this.wutfaces[0].x > this.width + 64) this.wutfaces.splice(0, 1);


  }

  this.spawnWave = function(){
    this.wutfaces.push(new WutFace(-32, this.yRanges[0]));
    this.wutfaces.push(new WutFace(-32, this.yRanges[1]));
    this.wutfaces.push(new WutFace(-32, this.yRanges[2]));
    this.wutfaces.push(new WutFace(-32, this.yRanges[3]));
  }

  this.render = function(){
    for(var i = 0; i < this.wutfaces.length; i ++) {
      this.wutfaces[i].render();
      // Uncomment to get kappa debug lines
      //stroke(255, 50, 50);
      //line(this.wutfaces[i].x, this.wutfaces[i].y, this.player.x, this.player.y);
    }
  }

}
