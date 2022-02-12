const { chooseRandom } = require('../utils/utils');

const verbs = {

  basicVerb: [
    'jump',
    'climb',
    'yank',
    'smash',
    'fight',
  ],

  presentVerbTP: [ // preceeds prepositions like 'into'. eg. The man ('swims'=>through) the pond.
    'goes',
    'walks',
    'travels',
    'swims',
  ],

  gerundVerb: [ // words ending with 'ing'. eg: The man is 'walking.'
    'saving',
    'running',
    'swimming',
  ],

  pastVerb: [ // preceeds articles such as 'The'. eg: The man ('loved'=>the) women.
    'owned',
    'killed',
    'stabbed',
    'fought',
    'tought',
    'loved',
    'saved',
    'imagined',
    'shot',
    'assulted',
    'arrested',
    'incubated',
    'burned',
    'punched',
    'kicked',
    'shaved',
    'cleaned',
    'paved',
    'ate',
    'paid',
    'craved',
    'blamed',
  ],

  pastVerbTP: [ // preceeds prepositions. eg: The cop ('ran'=>into) the building.
    'swam',
    'ran',
    'shot',
    'skipped',
    'dived',
    'fled',
    'strayed',
    'came',
    'smashed',
    'gave',
  ],

  presentState: [
    'is',
  ],

  pastState: [
    'was',
  ],

  pluralPastState: [
    'were',
  ],

  getVerb(string) {
    const wordType = this[string];
    const word = chooseRandom(wordType);
    return word;
  },

};

module.exports = {
  verbs,
};
