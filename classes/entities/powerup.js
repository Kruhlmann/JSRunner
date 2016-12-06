function Powerup(x, y, id, obstacleManager){
  this.w = 32;
  this.h = 32;
  this.x = x;
  this.y = y;
  this.id = id;
  this.obstacleManager = obstacleManager
  this.colors = [
    [255, 50, 50],  // Clear all obstacles
    [10, 100, 100], // Reduce gamespeed by 10%
    [255, 200, 75], // Add 5% to current score
  ]
  this.actions = [
    function(){
      this.obstacleManager.obstacles = [];
    }
  ]

  this.update = function(delta){
    this.y += delta;
  }

  this.render = function(){
    fill(this.colors[this.id][0], this.colors[this.id][1], this.colors[this.id][2])
    ellipse(this.x, this.y, this.w, this.h);
  }

}
