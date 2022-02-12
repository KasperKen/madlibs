const { chooseRandom } = require('../utils/utils');

const nouns = {

  person: [
    'woman',
    'man',
    'orphan',
    'girl',
    'boy',
    'banker',
    'lawyer',
    'president',
    'cop',
    'criminal',
    'intern',
    'slave',
    'angel',
    'dog',
    'elephant',
    'employer',
    'employee',
    'undertaker',
    'underwriter',
    'associate',
    'agent',
  ],

  place: [
    'White House',
    'bulding',
    'home',
    'jail',
    'courthouse',
    'bank',
    'boat',
    'ship',
    'spaceship',
    'castle',
    'sewer',
    'living room',
    'kitchen',
    'bedroom',
  ],

  possesiveNoun: [
    'brother',
    'sister',
    'mother',
    'father',
    'mom',
    'dad',
    'nephew',
    'neice',
    'nephew',
    'aunt',
    'uncle',
    'grandma',
    'grandpa',
    'friend',
    'neighbor',
    'house',
    'home',
  ],

  thing: [
    'paper',
    'rock',
    'scissors',
    'knife',
    'gun',
    'weapon',
    'car',
    'bomb',
    'axe',
    'tooth',
    'cup',
    'shirt',
    'chair',
    'computer',
    'tv',
    'tank',
    'hammer',
    'dog treat',
    'gold medal',
    'shoe',
    'piece of glass',
    'orange',
    'apple',
    'airsoft rifle',
    'epinephrin',
    'air guitar',
    'airhorn',
  ],

  selectFromAll() {
    let keys = Object.keys(this);
    keys = keys.slice(0, keys.length - 2);
    const wordType = chooseRandom(keys);
    return wordType;
  },

  getNoun(string) {
    let wordType;
    if (string === 'random') {
      wordType = this.selectFromAll();
    } else {
      wordType = string;
    }
    const word = chooseRandom(this[wordType]);
    return word;
  },

};

module.exports = {
  nouns,
};
