const getBooksWithRating = require('../helpers/getBooksWithRating');


module.exports = [{
  path: '/books',
  method: 'GET',
  handler: (request, reply) => {
    const toReply = getBooksWithRating();
    toReply.then((response) => {
      reply(response);
    });
  },
}];
