function VarLib(){
  this.gamespeed = 1.5;
  this.width = 16 * 32;
  this.height = 22 * 32;
  this.occupiedSpaces = [];
  this.score = 0;
  this.gachiTile = loadImage("http://i.imgur.com/t2g2cS9.png");
  this.pogChampTile = loadImage("http://i.imgur.com/uowFXmY.png");
  this.wutFaceTile = loadImage("http://i.imgur.com/D0qDh1V.png");
  this.kappaTile = loadImage("http://i.imgur.com/4ZFt2bS.png");
  this.dansGameTile = loadImage("http://i.imgur.com/IpN8MpU.png");
  this.crosshair = loadImage("http://i.imgur.com/vG1zoyQ.png");
  this.megaLULTile = loadImage("http://i.imgur.com/alGq6SR.png");
  this.hyperModeTimer = 100;
  this.gachiTime = 0;
  this.gachiMode = false;
  this.music = new Audio('sound/music1.ogg');
  this.music.loop = true;
  this.music.play();
  this.gachiMusic = new Audio('sound/gachimode.ogg');
  this.highNoon = new Audio('sound/high_noon.ogg');
  this.mcCreeMiss = new Audio('sound/mccree_miss.ogg');
  this.mcCreeFire = new Audio('sound/mccree_fire.ogg');

  this.managers = [];

  this.CONSTS = {
    POWERUP_IDS: [0, 1, 2, 3, 4],
    POWERUP_SPAWN_RATE: 15, //Lower is more frequent
  };


  this.getManagerByName = function(name){
    for(var i = 0; i < this.managers.length; i++)
      if(name == this.managers[i][1]) return  this.managers[i][0]
    return undefined;
  }

  this._shuffle = function(array) {
    if(array == undefined || array.length == undefined) {
      console.log("Attempting to shuffle an undefined array: " + array);
      return;
    }
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
