// const books = require('./books');


module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}];
