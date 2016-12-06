function Background(tile, width, height){
  this.tile = tile;
  this.tileOffset = 0;
  this.width = width;
  this.height = height;

  this.update = function(delta){
    this.tileOffset += delta;
    if(this.tileOffset >= 32) this.tileOffset -= 32;
  }

  this.render = function(){
    for(var x = 0; x < this.width / 32; x++){
      for(var y = -1; y < this.height / 32; y++){
        image(this.tile, x * 32, y * 32 + this.tileOffset, 32, 32);
      }
    }
  }

}
