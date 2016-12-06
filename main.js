function setup() {
  VAR_LIB = new VarLib();
  document.getElementById("score").setAttribute("style","width:" + VAR_LIB.width + "px");

  alive = true;
  noCursor();
  tileImg = loadImage("http://i.imgur.com/IbwmdgW.png");
  bg = new Background(tileImg, VAR_LIB.width, VAR_LIB.height);
  player = new Player(VAR_LIB.width, VAR_LIB.height);

  initManagers();
  initEvents();
  createCanvas(VAR_LIB.width, VAR_LIB.height);
}

function draw() {
  if(player.isAlive){
    // If playing
    VAR_LIB.score += VAR_LIB.gamespeed;
    document.getElementById("score").innerHTML="Score: " + Math.round(VAR_LIB.score / 10);
    VAR_LIB.occupiedSpaces = [];
    background(51);
    bg.update(VAR_LIB.gamespeed);
    bg.render();

    if(VAR_LIB.hyperModeTimer == 0){
      player.isInvunrable = true;
      player.canInterract = false;
      player.canMove = false;
      VAR_LIB.gamespeed *= 10;
      VAR_LIB.hyperModeTimer ++;
    }else if (VAR_LIB.hyperModeTimer > 0 && VAR_LIB.hyperModeTimer < 99) VAR_LIB.hyperModeTimer ++;
    else if(VAR_LIB.hyperModeTimer == 99){
      VAR_LIB.getManagerByName("KappaManager").kappas = [];
      VAR_LIB.getManagerByName("DansGameManager").dansgames = [];
      VAR_LIB.getManagerByName("WutFaceManager").wutfaces = [];
      VAR_LIB.getManagerByName("PowerupManager").powerups = [];
      player.canMove = true;
      player.isInvunrable = false;
      player.canInterract = true;
      VAR_LIB.hyperModeTimer = 100;
      VAR_LIB.gamespeed *= 0.1;
    }else{
      VAR_LIB.gamespeed += 0.001;
    }
    updateManagers();
    renderManagers();
    player.update(VAR_LIB.gamespeed);
    player.render();
  }else {
    // If game over
    background(51);
    bg.render();
    player.render();
    renderManagers();
  }
}

function initEvents(){
  window.setInterval(function(){VAR_LIB.getManagerByName("DansGameManager").spawnWave();}, 20000);
  window.setInterval(function(){VAR_LIB.getManagerByName("WutFaceManager").spawnWave();}, 15000);
}

function keyPressed(){
  if(keyCode == ENTER) VAR_LIB.getManagerByName("DansGameManager").spawnWave();
  if(!player.canMove) return;
  if(keyCode == LEFT_ARROW) player.velocity.x = -1 * player.velocity.base;
  if(keyCode == RIGHT_ARROW) player.velocity.x = 1 * player.velocity.base;
  if(keyCode == UP_ARROW) player.velocity.y = -1 * player.velocity.base;
  if(keyCode == DOWN_ARROW) player.velocity.y = 1 * player.velocity.base;
}

function keyReleased(){
  if(keyCode == LEFT_ARROW && player.velocity.x == -1 * player.velocity.base) player.velocity.x = 0;
  if(keyCode == RIGHT_ARROW && player.velocity.x == player.velocity.base) player.velocity.x = 0;
  if(keyCode == UP_ARROW && player.velocity.y == -1 * player.velocity.base) player.velocity.y = 0;
  if(keyCode == DOWN_ARROW && player.velocity.y == player.velocity.base) player.velocity.y = 0;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function initManagers(){
  //Comment/Uncomment to add/remove managers
  //WARNING! Some managers are required by others!
  VAR_LIB.managers.push([new KappaManager(player, VAR_LIB), "KappaManager"]);
  VAR_LIB.managers.push([new PowerupManager(player, VAR_LIB), "PowerupManager"]);
  VAR_LIB.managers.push([new WutFaceManager(player, VAR_LIB), "WutFaceManager"]);
  VAR_LIB.managers.push([new DansGameManager(player, VAR_LIB), "DansGameManager"]);
}

function updateManagers() {
  for(var i = 0; i < VAR_LIB.managers.length; i++){
    VAR_LIB.managers[i][0].update(VAR_LIB.gamespeed);
  }
}

function renderManagers(){
  for(var i = 0; i < VAR_LIB.managers.length; i++){
    VAR_LIB.managers[i][0].render();
  }
}
