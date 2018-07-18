//entity class to handle the shared
//fuctions of the game characters
//& draw entities on the screen
class Entity {
  constructor (){
    this.sprite = "images/";
    this.x = 2;
    this.y = 5;
    this.score = 0;
  }

  render(){
    //hard coded image dimension offsets
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  //to know when enemy is out of bounds and player 'wins'
  update(dt){
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y < -.5;
  }


  checkCollisions(playerOrEnemy){
    if (this.y === playerOrEnemy.y) {
      if (this.x >= playerOrEnemy.x - 0.5 && this.x <= playerOrEnemy.x + 0.5) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}

// own player class, to handle player specific functionality
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Entity {
  constructor() {
    super();
    this.sprite += "char-pink-girl.png";
    this.moving = false;
    this.win = false;
  }

  update(dt){
    super.update();
    if (this.isOutOfBoundsY && !this.moving && !this.win) {
      this.score += 1;
      player.reset();
    }
    if (this.isOutOfBoundsY && !this.moving && !this.win && this.score == 3) {
      this.win = true;
      winOver();
    }

  }

  handleInput(input){
    switch (input){
      case 'left' : this.x = this.x > 0 ? this.x -1 : this.x;
        break;
      case 'up' : this.y = this.y > -.5 ? this.y -1 : this.y;
        break;
      case 'down' : this.y = this.y < 5 ? this.y +1 : this.y;
        break;
      case 'right' : this.x = this.x < 4 ? this.x +1 : this.x;
        break;
      default:
        break;
    }
  }

  render() {
    super.render();
    this.moving = false;
  }

  reset() {
    this.y = 5;
    this.x = 2;
    this.win = false;
  }

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
class Enemy extends Entity {
  constructor(x, y) {
    super();
    this.sprite += "enemy-bug.png"
    this.x = x;
    this.y = y;
  }

  update(dt){
    super.update();
    if(this.isOutOfBoundsX){
      this.x = -1;
    } if (player.score <= 0) {
      this.x += dt*Math.random()*5;
    } if (player.score == 1) {
      this.x += dt*Math.random()*6;
    } if (player.score == 2) {
      this.x += dt*Math.random()*8;
    } if (player.win == true) {
      this.x = 0;
    }
  }
}
