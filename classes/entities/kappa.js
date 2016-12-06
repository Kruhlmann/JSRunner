function Kappa(x, y, tile){
  this.w = 24;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.tile = VAR_LIB.kappaTile;
  this.speedModifier = 1 + Math.random() / 2;

  this.update = function(delta){
    if(VAR_LIB.gachiMode) this.tile = VAR_LIB.gachiTile;
    this.y += delta * this.speedModifier;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
