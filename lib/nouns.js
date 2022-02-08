const utils = require('../utils/utils');

const people = [
  'woman',
  'man',
  'girl',
  'boy',
  'banker',
  'lawyer',
  'president',
  'cop',
  'criminal',
  'intern',
  'slave',
];

const places = [
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
];

const possesiveNouns = [
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
];

const randomNoun = (type) => {
  let nounType;
  switch (type) {
    case 'person':
      nounType = people;
      break;
    case 'place':
      nounType = places;
      break;
    case 'possesive':
      nounType = possesiveNouns;
      break;
    default:
      console.log(`Error: ${type} is not a valid noun`);
      break;
  }
  return utils.chooseRandom(nounType);
};

module.exports = {
  randomNoun,
};
