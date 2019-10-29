/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const parentDIV = document.getElementById('phrase');

    for (let i = 0; i < this.phrase.length; i++) {
      const character = this.phrase.charAt(i);
      const charLI = document.createElement('li');

      if (/ /.test(character)) {
        charLI.setAttribute('class', 'space');
        charLI.innerHTML = ' ';
      } else {
        charLI.setAttribute('class', `hide letter ${character}`);
        charLI.innerHTML = character;
      }
      parentDIV.appendChild(charLI);
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return !!this.phrase.match(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const charLIs = document.getElementsByClassName('letter');
    for (let i = 0; i < charLIs.length; i++) {
      const charLI = charLIs[i];
      if (letter === charLI.innerHTML) {
        charLI.setAttribute('class', `show letter ${letter}`);
      }
    }
  }
}
