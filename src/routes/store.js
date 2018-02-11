const storeFunc = require('../helpers/storeFunc');

module.exports = [{
  path: '/store',
  method: 'POST',
  handler: (request, reply) => {
    storeFunc();
    reply('books in the database is stored');
  },
}];

