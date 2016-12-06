function Obstacle(x, y, tile){
  this.w = 32;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.tile = tile;

  this.update = function(delta){
    this.y += delta;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
