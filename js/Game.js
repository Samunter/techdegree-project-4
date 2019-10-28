/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: 'Live long and prosper' },
      { phrase: 'What goes around comes around' },
      { phrase: 'Bibbidy Bobbidy Boo' },
      { phrase: 'Count me in' },
      { phrase: 'A bird in the hand is worth two in the bush' }
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let i = Math.floor(Math.random() * this.phrases.length);
    // console.log('phrase index: ', i);
    return new Phrase(this.phrases[i].phrase);
  }

  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction() {}

  checkForWin() {
    const charLIs = document.getElementsByClassName('letter');
    // console.log("character LIs: ", charLIs);
    let gameIsWon = true;
    for (let i = 0; i < charLIs.length; i++) {
      const charLI = charLIs[i];
      if (charLI.classList.contains('hide')) {
        gameIsWon = false;
      }
    }
    return gameIsWon;
  }

  removeLife() {
    const hearts = document.getElementsByTagName('img');
    console.log('hearts: ', hearts);
    const heart = hearts[this.missed];
    console.log('heart: ', heart);
    heart.setAttribute('src', 'images/lostHeart.png');
    this.missed += 1;
    if (this.missed === 5) {
      this.checkForWin();
      this.gameOver();
    }
  }

  gameOver() {
    document.getElementById('overlay').style.display = 'block';
    const gameOverMessage = document.getElementById('game-over-message');
    const resetButton = document.getElementById('btn__reset');
    if (this.checkForWin()) {
      gameOverMessage.innerHTML = 'You won! Good job!';
    } else {
      gameOverMessage.innerHTML = 'Sorry, better luck next time!';
    }
    resetButton.innerHTML = 'Play Again';
  }
}

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = phrase => {
//   console.log(`Phrase - phrase: `, phrase.phrase);
// };

// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
