function Powerup(x, y, id, VAR_LIB){
  this.w = 32;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.id = id;
  this.images = [
    loadImage("http://i.imgur.com/wtAwTOu.png"),// Clear all kappas ruwBub
    loadImage("http://i.imgur.com/YsO0Kwu.png"),// gachiGASM mode points doubled ruwGASM
    loadImage("http://i.imgur.com/RVU4AVf.png"),//
    loadImage("http://i.imgur.com/qq9e8ZY.png"),//
    loadImage("http://i.imgur.com/0S0UTVg.png"),// Grants a shield
  ]
  this.actions = [
    function(){VAR_LIB.getManagerByName("KappaManager").kappas = [];},
    function(){
      VAR_LIB.music.pause();
      VAR_LIB.gachiMode = true;
      VAR_LIB.gachiMusic.currentTime = 0;
      VAR_LIB.gachiMusic.play();
      d = new Date();
      seconds = Math.round(d.getTime() / 1000);
      VAR_LIB.gachiTime = seconds + 8;
    },
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
