const chooseRandom = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

module.exports = {
  chooseRandom,
};
