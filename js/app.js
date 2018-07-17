// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
let allowedKeys = {
    32: 'spaceBar',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

document.addEventListener('keyup', function(e) {
   allowedKeys;

  player.handleInput(allowedKeys[e.keyCode]);
});
