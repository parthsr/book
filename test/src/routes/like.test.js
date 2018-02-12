const server = require('../../../src/server');

describe('checking for api endpoint /books', () => {
  it('checking for the status code', () => {
    const options = {
      method: 'POST',
      url: '/like/1/like',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});