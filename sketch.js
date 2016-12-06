function setup() {
  VAR_LIB = new VarLib();

  alive = true;
  tileImg = loadImage("http://i.imgur.com/7IMW5u5.png");
  bg = new Background(tileImg, VAR_LIB.width, VAR_LIB.height);
  player = new Player(VAR_LIB.width, VAR_LIB.height);

  initManagers();
  createCanvas(VAR_LIB.width, VAR_LIB.height);
}

function draw() {
  if(player.isAlive){
    VAR_LIB.gamespeed += 0.001;
    background(51);
    bg.update(VAR_LIB.gamespeed);
    bg.render();
    updateManagers(VAR_LIB.gamespeed);
    renderManagers();
    player.update(VAR_LIB.gamespeed);
    player.render();
  }else {
    background(51);
    bg.render();
    player.render();
    renderManagers();
  }
}

function keyPressed(){
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
  obstacleManager = new ObstacleManager(VAR_LIB.width, VAR_LIB.height, player);
}

function updateManagers(delta) {
  obstacleManager.update(delta);
}

function renderManagers(){
  obstacleManager.render();
}
