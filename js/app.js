/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', function() {
  game = new Game();
  game.startGame();
});