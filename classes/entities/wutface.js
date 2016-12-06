function WutFace(x, y){
  this.w = 32;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.tile = VAR_LIB.wutFaceTile;
  this.speedModifier = 0.5 + Math.random() / 2;

  this.update = function(delta){
    if(VAR_LIB.gachiMode) this.tile = VAR_LIB.gachiTile;
    this.x += delta * this.speedModifier;
    this.y += delta;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
