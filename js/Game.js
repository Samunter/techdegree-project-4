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
