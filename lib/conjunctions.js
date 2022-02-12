const { chooseRandom } = require('../utils/utils');

const conjunctions = {

  conjunction: [
    'and',
    'because',
    'but',
    'while',
  ],

  getConj() {
    const word = chooseRandom(this.conjunction);
    return word;
  },

};

module.export = {
  conjunctions,
};
