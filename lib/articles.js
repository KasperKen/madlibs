const { chooseRandom } = require('../utils/utils');

const articles = {

  article: [
    'the',
    'this',
    'a',
    'that',
    'my',
    'her',
    'his',
    'our',
    'their',
  ],

  getArticle() {
    const word = chooseRandom(this.article);
    return word;
  },
};

module.exports = {
  articles,
};
