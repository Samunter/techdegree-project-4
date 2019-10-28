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
    const overlay = document.getElementById('overlay');
    if (this.checkForWin()) {
      gameOverMessage.innerHTML = 'You won! Good job!';
      overlay.setAttribute('class', 'win');
    } else {
      gameOverMessage.innerHTML = 'Sorry, better luck next time!';
      overlay.setAttribute('class', 'lose');
    }
    console.log(overlay);
    resetButton.innerHTML = 'Play Again';
  }

  handleInteraction(button) {
    const letter = button.innerHTML;
    console.log('letter: ', letter);
    button.disabled = true;
    if (!this.activePhrase.checkLetter(letter)) {
      button.classList.add('wrong');
      this.removeLife();
    } else if (this.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      this.checkForWin();
      if (this.checkForWin()) {
        this.gameOver();
      }
    }
  }
}
