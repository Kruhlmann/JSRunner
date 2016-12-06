function Powerup(x, y, id, VAR_LIB){
  this.w = 32;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.id = id;
  this.images = [
    loadImage("http://i.imgur.com/wtAwTOu.png"),// Clear all kappas ruwBub
    loadImage("http://i.imgur.com/YsO0Kwu.png"),// Super speed ruwGASM
    loadImage("http://i.imgur.com/RVU4AVf.png"),// 
    loadImage("http://i.imgur.com/qq9e8ZY.png"),//
    loadImage("http://i.imgur.com/0S0UTVg.png"),// Grants a shield
  ]
  this.actions = [
    function(){VAR_LIB.getManagerByName("KappaManager").kappas = [];},
    function(){VAR_LIB.hyperModeTimer = 0;},
    function(){VAR_LIB.getManagerByName("DansGameManager").spawnWave();},
    function(){VAR_LIB.getManagerByName("WutFaceManager").spawnWave();},
    function(){},
  ]

  this.update = function(delta){
    this.y += delta;
  }

  this.render = function(){
    image(this.images[this.id], this.x, this.y, this.w, this.h);
  }

  this.action = function(){
    this.actions[this.id]();
  }

}
