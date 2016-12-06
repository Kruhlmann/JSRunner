function McCree(player, VAR_LIB, width, height){
  this.width = 72;
  this.height = 72;
  this.image = VAR_LIB.crosshair;
  this.x = width / 2 - this.width / 2;
  this.y = height - this.height * 2;
  this.active = false;
  this.player = player;
  this.startTime = 0;
  this.duration = 3;


  this.update = function(delta){
    if(!this.active) return;
    if(this.player.x > this.x) this.x += delta;
    if(this.player.x < this.x) this.x -= delta;
    if(this.player.y > this.y) this.y += delta;
    if(this.player.y < this.y) this.y -= delta;
    d = new Date();
    seconds = Math.round(d.getTime() / 1000);
    if(seconds > this.startTime + this.duration) this.toggleOff();
    if(Math.abs(this.player.x - this.x) - this.width / 2 <= this.width / 2 && Math.abs(this.player.y - this.y) - this.height / 2 + 16 <= this.height / 2) {
      this.player.isAlive = false;
      VAR_LIB.mcCreeFire.play();
      this.toggleOff();
    }
  }

  this.toggleOn = function(){
    if(this.active) return;
    this.active = true;
    d = new Date();
    this.startTime = Math.round(d.getTime() / 1000);
    VAR_LIB.music.pause();
    VAR_LIB.gachiMode = false;
    VAR_LIB.gachiMusic.pause();
    VAR_LIB.highNoon.currentTime = 0;
    VAR_LIB.highNoon.play();
  }

  this.toggleOff = function(){
    if(!this.active) return;
    this.active = false;
    VAR_LIB.music.play();
  }

  this.render = function(){
    if(!this.active) return;
    image(this.image, this.x, this.y, this.width, this.height);
  }


}
