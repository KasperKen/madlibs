const chooseRandom = (object) => {
  const index = Math.floor(Math.random() * object.length);
  return object[index];
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
  chooseRandom, capitalizeFirstLetter,
};
