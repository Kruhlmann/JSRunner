function PogChamp(x, y, reverse){
  this.w = 28;
  this.h = 32;
  this.reverse = reverse;
  this.centerX = x;
  this.centerY = y;
  this.theta = 500;
  this.radius = Math.random() * 100 + 100;
  this.tile = VAR_LIB.pogChampTile;
  this.speedModifier = 0.5 * Math.random();

  this.update = function(delta){
    this.centerX += delta * this.speedModifier * this.reverse;
    this.centerY += delta * this.speedModifier;
    if(this.theta > 360) this.theta -= 360;
    this.theta += delta;
    if(this.theta > 360) this.theta -= 360;
    if(VAR_LIB.gachiMode) this.tile = VAR_LIB.gachiTile;
    this.x = this.radius * Math.cos(this.theta * 3.1415926 / 180.0) + this.centerX;
    this.y = this.radius * Math.sin(this.theta * 3.1415926 / 180.0) + this.centerY;
  }

  this.render = function(){
    image(this.tile, this.x, this.y, this.w, this.h);
    //fill(255);
    //rect(this.centerX, this.centerY, 32, 32)
  }

}
