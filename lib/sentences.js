const { chooseRandom, capitalizeFirstLetter } = require('../utils/utils');

const { nouns } = require('./nouns');
const { verbs } = require('./verbs');
const { adjectives } = require('./adjectives');
const { articles } = require('./articles');
const { conjunction } = require('./conjunctions');
const { prepositions } = require('./prepositions');

const sentences = {

  sentence: [
    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('presentVerbTP')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('place')}.`,

    `${articles.getArticle()} ${nouns.getNoun('possesiveNoun')} ${verbs.getVerb('presentState')} ${adjectives.getAdj('sentientAdj')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('presentState')} ${adjectives.getAdj('sentientAdj')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('random')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('place')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('thing')}.`,

    `${articles.getArticle()} ${nouns.getNoun('person')} ${verbs.getVerb('pastVerb')} ${articles.getArticle()} ${nouns.getNoun('random')} ${prepositions.getPrep()} ${articles.getArticle()} ${nouns.getNoun('random')}.`,

  ],

  generateRandomSentence() {
    return chooseRandom(sentences.sentence);
  },

  structureSentence(string) {
    const array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
      let val = array[i];
      if (
        val.charAt(0) === 'a'
        || val.charAt(0) === 'e'
        || val.charAt(0) === 'o'
        || val.charAt(0) === 'u') {
        if (array[i - 2] === 'a') {
          array[i - 2] = 'an';
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
