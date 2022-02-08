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
  let arrayType;
  switch (type) {
    case 'person':
      arrayType = people;
      break;
    case 'place':
      arrayType = places;
      break;
    case 'possesive':
      arrayType = possesiveNouns;
      break;
    default:
      console.log(`Error: ${type} is not a valid noun`);
      break;
  }
  const index = Math.floor(Math.random() * arrayType.length);
  return arrayType[index];
};

module.exports = {
  randomNoun,
};
