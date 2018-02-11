const server = require('../../../src/server');

describe('cvhecking if the server works or not', () => {
  test('checking if the status code is 200 or not', () => {
    const options = {
      url: '/store',
      method: 'POST',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
