function KappaManager(player, VAR_LIB){
  this.kappas = [];
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

    for(var i = 0; i < this.kappas.length; i ++) {
      this.kappas[i].update(delta);
      if(this.kappas[i].x - this.player.x >= -this.player.w && this.kappas[i].x - this.player.x <= this.player.w){
        if(this.kappas[i].y - this.player.y >= -this.player.h && this.kappas[i].y - this.player.y <= this.player.h){
          if(!this.player.isInvunrable && this.player.canInterract){
            this.player.isAlive = false;
            console.log("Collision with Kappa #" + i);
          }
        }
      }
    }
    // Remove out of bounds kappas
    if(this.kappas.length > 0) if(this.kappas[0].y > this.height + 64) this.kappas.splice(0, 1);

    if(this.internal_timer >= 32){
      this.internal_timer -= 32;
      if(VAR_LIB.occupiedSpaces.length < this.width / 32){
        ran_d = Math.floor(Math.random() * this.xRanges.length);
        var loopChecker = 0;
        while(VAR_LIB.occupiedSpaces.indexOf(ran_d) > -1 && loopChecker < 500){
          ran_d = Math.floor(Math.random() * this.xRanges.length);
          loopChecker ++;
        }

        this.kappas.push(new Kappa(this.xRanges[ran_d], -64));
        VAR_LIB.occupiedSpaces.push(ran_d);
      }
    }
  }

  this.render = function(){
    for(var i = 0; i < this.kappas.length; i ++) {
      // Uncomment to get kappa debug lines
      //fill(255, 0, 0);
      //rect(this.kappas[i].x, this.kappas[i].y, this.kappas[i].w, this.kappas[i].h)
      this.kappas[i].render();
      //stroke(255, 50, 50);
      //line(this.kappas[i].x, this.kappas[i].y, this.player.x, this.player.y);
    }
  }

}
