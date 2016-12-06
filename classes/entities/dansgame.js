function DansGame(x, y){
  this.w = 28;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.tile = VAR_LIB.dansGameTile;
  this.speedModifier = 0.5 + Math.random() / 2;

  this.update = function(delta){
    if(VAR_LIB.gachiMode) this.tile = VAR_LIB.gachiTile;
    this.y -= delta * this.speedModifier;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
