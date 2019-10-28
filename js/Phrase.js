/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const parentDIV = document.getElementById('phrase');
    // console.log('parentDIV: ', parentDIV);

    for (let i = 0; i < this.phrase.length; i++) {
      const character = this.phrase.charAt(i);
      // console.log('character: ', character);
      const charLI = document.createElement('li');
      // console.log('charLI: ', charLI);

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

  checkLetter(letter) {
    return !!this.phrase.match(letter);
  }

  showMatchedLetter(letter) {
    const charLIs = document.getElementsByClassName('letter');
    // console.log("character LIs: ", charLIs);
    for (let i = 0; i < charLIs.length; i++) {
      const charLI = charLIs[i];
      // console.log('character LI inner html:', charLI.innerHTML);
      if (letter === charLI.innerHTML) {
        charLI.setAttribute('class', `show letter ${letter}`);
      }
    }
  }
}

/* const examplePhrase = new Phrase('What up');
console.log('examplePhrase.phrase: ', examplePhrase.phrase); */
