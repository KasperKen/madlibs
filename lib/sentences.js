const { chooseRandom, capitalizeFirstLetter } = require('../utils/utils');

const { nouns } = require('./nouns');
const { verbs } = require('./verbs');
const { adjectives } = require('./adjectives');
const { articles } = require('./articles');
const { conjunction } = require('./conjunctions');
const { prepositions } = require('./prepositions');

const sentences = {

  sentence: () => [
    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('presentVerbTP')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('place')}.`,

    `${articles.getArticle()} ${nouns.getNoun('possesiveNoun')} ${verbs.getVerb('presentState')} ${adjectives.getAdj('sentientAdj')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('presentState')} ${adjectives.getAdj('sentientAdj')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('random')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('place')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('thing')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('random')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('random')}.`,

  ],

  generateRandomSentence() {
    return chooseRandom(sentences.sentence());
  },


  // johnny eats a apple cider today
  // Johnny eats an apple cider today
  structureSentence(string) {
    const array = string.split(' ');

    vowels = ['a', 'e', 'i', 'o', 'u'];
    
    //"apples are good on a hot day"
    for (let i = 1; i < array.length; i++) {
      let firstLetter = array[i].charAt(0);

      // if this current word start with a vowel
      if (vowels.includes(firstLetter)) {
        // if the PREVIOUS WORD is 'a'
        if (array[i - 1] === 'a') {
          // change the PREVIOS WORD TO 'an'
          array[i - 1] = 'an';
        }
      }
    }
    const newString = array.join(' ');
    return capitalizeFirstLetter(newString);
  },

  logRandomSentence() {
    const randomSentence = this.generateRandomSentence();
    const structuredSentence = this.structureSentence(randomSentence);
    console.log(structuredSentence);
  },

};

module.exports = {
  sentences,
};


// input          : johnny eats a apple today
// expected output: Johnny eats an apple today
console.log(sentences.structureSentence("johnny eats a apple today"))

// input          : johnny eats a apple always
// expected output: Johnny eats an apple always
console.log(sentences.structureSentence("johnny eats a apple always"))

// input          : johnny eats a apple today
// expected output: Johnny eats an apple today
console.log(sentences.structureSentence("johnny eats a chicken today"))

// input          : johnny eats a apple always
// expected output: Johnny eats an apple always
console.log(sentences.structureSentence("johnny eats a chicken always"))


let sentenceSet = new Set();

for (let i = 0; i < 1000; i++){
  sentenceSet.add(sentences.generateRandomSentence());
}

console.log(sentenceSet);
console.log(`The size of the sentence set is ${sentenceSet.size}`);