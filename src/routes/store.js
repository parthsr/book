const storeFunc = require('../helpers/storeFunc');

module.exports = [{
  path: '/store',
  method: 'POST',
  handler: (request, reply) => {
    const toReply = getBooksWithRating();
    toReply.then((response) => {
      reply(response);
    });
  },
}];

