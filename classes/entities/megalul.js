function MegaLUL(VAR_LIB){
  this.startRight = Math.random() > 0.5;
  this.startBottom = Math.random() > 0.5;
  this.w = 32;
  this.h = 32;
  this.x = this.startRight ? VAR_LIB.width + this.w : -1 * this.w;
  this.y = this.startBottom? VAR_LIB.height + this.h : -1 * this.h;
  this.xMod = this.startRight ? -(0.5 + Math.random() / 2) : 0.5 + Math.random() / 2;
  this.yMod = this.startBottom ? -(0.5 + Math.random() / 2) : 0.5 + Math.random() / 2;
  this.tile = VAR_LIB.megaLULTile;

  this.update = function(delta){
    if(VAR_LIB.gachiMode) this.tile = VAR_LIB.gachiTile;
    this.x += delta * this.xMod;
    this.y += delta * this.yMod;
    if(this.x <= 0 && this.startRight) this.xMod *= -1;
    if(this.y <= 0 && this.startBottom) this.yMod *= -1;
    if(this.x >= VAR_LIB.width + this.w && !this.startRight) this.xMod *= -1;
    if(this.y >= VAR_LIB.height + this.h && !this.startBottom) this.yMod *= -1;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
