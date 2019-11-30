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
    this.lettersGuessed = [];
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let i = Math.floor(Math.random() * this.phrases.length);
    return new Phrase(this.phrases[i].phrase);
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   * Resets game by removing phrase from display, enabling all onscreen
   * keys, and restoring hearts.
   */
  startGame() {
    const phraseParent = document.getElementById('phrase');
    const keys = document.getElementsByClassName('key');
    const hearts = document.getElementsByTagName('img');

    while (phraseParent.firstChild) {
      phraseParent.removeChild(phraseParent.firstChild);
    }

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      key.disabled = false;
      key.className = 'key';
    }

    for (let i = 0; i < hearts.length; i++) {
      const heart = hearts[i];
      heart.setAttribute('src', 'images/liveHeart.png');
    }

    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const charLIs = document.getElementsByClassName('letter');
    let gameIsWon = true;
    for (let i = 0; i < charLIs.length; i++) {
      const charLI = charLIs[i];
      if (charLI.classList.contains('hide')) {
        gameIsWon = false;
      }
    }
    return gameIsWon;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = document.getElementsByTagName('img');
    const heart = hearts[this.missed];
    heart.setAttribute('src', 'images/lostHeart.png');
    this.missed += 1;
    if (this.missed === 5) {
      this.checkForWin();
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * Consults checkForWin() method for whether or not the user won the game
   */
  gameOver() {
    document.getElementById('overlay').style.display = '';
    const gameOverMessage = document.getElementById('game-over-message');
    const resetButton = document.getElementById('btn__reset');
    const overlay = document.getElementById('overlay');
    if (this.checkForWin()) {
      gameOverMessage.innerHTML = 'You won! Good job!';
      overlay.setAttribute('class', 'title win');
    } else {
      gameOverMessage.innerHTML = 'Sorry, better luck next time!';
      overlay.setAttribute('class', 'title lose');
    }
    resetButton.innerHTML = 'Play Again';
  }

  /**
   * Handles onscreen keyboard button clicks and keypress
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    const letter = button.innerHTML;
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
