const books = require('./books');
const store = require('./store');
const like = require('./like');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(books).concat(store).concat(like);
