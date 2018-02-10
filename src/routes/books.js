const getBooks = () => {
  '' 
;};

module.exports = [{
  path: '/books',
  method: 'GET',
  handler: (request, reply) => {
    const toReply = getBooks();
    reply(toReply);
  },
}];

