const { chooseRandom } = require('../utils/utils');

const adjectives = {

  adjectives: [
    'beautiful',
    'smooth',
    'angry',
    'sad',
    'happy',
    'glad',
    'simple',
    'special',
    'crazy',
  ],

  getAdj() {
    const word = chooseRandom(this.adjectives);
    return word;
  },

};

module.exports = {
  adjectives,
};
