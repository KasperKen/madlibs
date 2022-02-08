const chooseRandom = (array) => {
  const index = Math.floor(Math.Random() * array.length);
  return array[index];
};

module.exports = {
  chooseRandom,
};
