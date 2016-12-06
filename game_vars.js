function VarLib(){
  this.gamespeed = 1.5;
  this.width = 16 * 32;
  this.height = 22 * 32;
  this.occupiedSpaces = [];
  this.score = 0;
  this.hyperModeTimer = 100;

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
