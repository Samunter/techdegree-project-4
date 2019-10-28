/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', function() {
  game = new Game();
  game.startGame();
});

const keyboard = document.getElementById('qwerty');

keyboard.addEventListener('click', function(e) {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
  }
});

document.addEventListener('keyup', function(e) {
  if (/^[a-zA-Z]{1}$/.test(e.key)) {
    const letter = e.key.toLowerCase();
    const buttons = [...document.getElementsByClassName('key')];
    const button = buttons.filter(button => button.innerHTML === letter)[0];

    if (!game.lettersTyped.includes(letter)) {
      console.log('letter: ', letter);
      game.handleInteraction(button);
    }

    game.lettersTyped.push(letter);
  }
});
