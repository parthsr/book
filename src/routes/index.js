module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('helloWorld');
  },
}];