const { chooseRandom } = require('../utils/utils');

const prepositions = {

  prep: [
    'into',
    'for',
    'through',
    'with',
    'without',
  ],

  getPrep() {
    const word = chooseRandom(this.prep);
    return word;
  },

};

module.exports = {
  prepositions,
};
