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

//function to pop up overlay with winning message
function winOver() {
  if (player.win === true){
        let message = document.createTextNode('You win!');
        let messageBtn = document.createTextNode('Play again?')
        let doc = document,
            overlay = doc.createElement('div'),
            winMessageDiv = doc.createElement('div'),
            winMessage = doc.createElement('h1'),
            winBtn = doc.createElement('button');
        overlay.id = "overlay"
        overlay.classList.add('vis');
        overlay.classList.add('toggle-content');
        winMessage.appendChild(message);
        winMessageDiv.className = "winning-message";
        winBtn.appendChild(messageBtn);
        doc.body.appendChild(overlay);
        overlay.insertAdjacentElement('beforeend', winMessageDiv);
        winMessageDiv.insertAdjacentElement('beforeend', winMessage);
        winMessageDiv.insertAdjacentElement('beforeend', winBtn);
        winBtn.setAttribute("id", "winBtn");
  } else {
    overlay.classList.remove('vis');
    overlay.classList.toggle('vis');
  }
}

let show = function (overlay) {
  overlay.classList.add('vis');
};

let hide = function (overlay) {
  overlay.classList.remove('vis');
};

let toggle = function (overlay) {
  overlay.classList.toggle('vis');
};
