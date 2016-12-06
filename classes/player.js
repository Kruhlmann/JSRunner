function Player(cW, cH){
  this.cW = cW;
  this.cH = cH;
  this.w = 24;
  this.h = 24;
  this.x = cW / 2 - this.w / 2;
  this.y = cH - 2 * this.h;
  this.velocity = {
    x: 0,
    y: 0,
    base: 1.5
  }
  this.isInvunrable = false;
  this.canInterract = true;
  this.canMove = true;
  this.image = loadImage("http://i.imgur.com/vwJyFs4.png");
  this.isAlive = true;

  this.update = function(gamespeed){
    //this.x += this.velocity.x * gamespeed;
    //this.y += this.velocity.y * gamespeed;
    if(this.canMove) this.x = mouseX - this.w / 2;
    if(this.canMove) this.y = mouseY - this.h / 2;
    if(this.x < 0) this.x = 0;
    if(this.x > this.cW - this.w) this.x = this.cW - this.w;
    if(this.y < 0) this.y = 0;
    if(this.y > this.cH - this.h) this.y = this.cH - this.h;
  }

  this.render = function(){
    image(this.image, this.x, this.y, this.w, this.h);
  }

}
