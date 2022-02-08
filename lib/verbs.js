const utils = require('../utils/utils');

const verbs = {

  basicVerbs: [
    'jump',
    'climb',
    'yank',
    'smash',
    'fight',
  ],

  presentVerbsTP: [ // preceeds prepositions like 'into'. eg. The man ('swims'=>through) the pond.
    'goes',
  ],

  gerundVerbs: [ // words ending with 'ing'. eg: The man is 'walking.'
    'save',
    'run',
    'swim',
  ],

  pastVerbs: [ // preceeds articles such as 'The'. eg: The man ('loved'=>the) women.
    'owned',
    'gave',
    'killed',
    'stabbed',
    'fought',
    'tought',
    'loved',
    'hated',
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

  pastVerbsTP: [ // preceeds prepositions. eg: The cop ('ran'=>into) the building.
    'swam',
    'ran',
    'shot',
    'skipped',
    'dived',
    'fled',
    'strayed',
    'came',
    'smashed',
  ],
};

verbs.basicVerbs.forEach((verb) => { // Uses basicVerbs as a base for gerund, and presentVerbs.
  verbs.presentVerbsTP.push(`${verb}s`);
  verbs.gerundVerbs.push(`${verb}ing`);
});

const randomVerb = (verbType) => {
  const verb = utils.chooseRandom(verbs[verbType]);
  return verb;
};

module.exports = {
  randomVerb,
};
