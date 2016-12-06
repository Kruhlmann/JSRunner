function Kappa(x, y, tile){
  this.w = 24;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.tile = loadImage("http://i.imgur.com/4ZFt2bS.png");

  this.update = function(delta){
    this.y += delta;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
  }

}
