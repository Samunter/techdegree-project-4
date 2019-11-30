/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/**
 * Initialize new instance of the Game class
 */
let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', function() {
  game = new Game();
  game.startGame();
});

const keyboard = document.getElementById('qwerty');

/**
 * triggers the handleInteraction() method from the Game class
 * when a key from onscreen keyboard is clicked
 */
keyboard.addEventListener('click', function(e) {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
    game.lettersGuessed.push(e.target.innerHTML);
  }
});

/**
 * triggers the handleInteraction() method from the Game class
 * when a letter is pressed on the computer keyboard
 */
document.addEventListener('keyup', function(e) {
  if (/^[a-zA-Z]{1}$/.test(e.key)) {
    const letter = e.key.toLowerCase();
    const buttons = [...document.getElementsByClassName('key')];
    const button = buttons.filter(button => button.innerHTML === letter)[0];

    if (!game.lettersGuessed.includes(letter)) {
      game.handleInteraction(button);
    }

    game.lettersGuessed.push(letter);
  }
});
