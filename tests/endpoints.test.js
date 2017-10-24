const request = require('request-promise-native');

const baseURL = 'http://localhost:8000/';

describe('GET /', () => {
  test('return correct status & content-type', async () => {
    const options = {
      uri: baseURL,
      resolveWithFullResponse: true
    };
    const res = await request(options);
    expect(res).toBeDefined();
    expect(res.headers['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /api/unexisted-path', () => {
  const options = {
    uri: `${baseURL}api/unexisted-path`,
    resolveWithFullResponse: true
  };

  test('return correct status & content-type', async () => {
    try {
      await request(options);
    } catch (e) {
      const res = e.response;
      expect(res).toBeDefined();
      expect(res.statusCode).toBe(404);
      expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
    }
  });

  test('return correct json object', async () => {
    try {
      await request(options);
    } catch (e) {
      const body = JSON.parse(e.response.body);
      expect(body.statusCode).toBe(404);
      expect(body.message).toBe('Can\'t find endpoint');
    }
  });
});

describe('GET /unexisted-path', () => {
  const options = {
    uri: `${baseURL}unexisted-path`,
    resolveWithFullResponse: true
  };
  test('return correct status & content-type', async () => {
    try {
      await request(options);
    } catch (e) {
      const res = e.response;
      expect(res).toBeDefined();
      expect(res.statusCode).toBe(404);
      expect(res.headers['content-type']).toBe('text/html; charset=utf-8');
    }
  });
});

describe('GET /api/models', () => {
  const options = {
    uri: `${baseURL}api/models`,
    resolveWithFullResponse: true
  };

  test('return correct status & content-type', async () => {
    const res = await request(options);
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  test('return array of object in body', async () => {
    const res = await request(options);
    const data = JSON.parse(res.body);
    expect(data).toBeInstanceOf(Array);
  });

  test('return correct format of models data', async () => {
    const res = await request(options);
    const model = JSON.parse(res.body)[0];
    expect(model.name).toBeDefined();
    expect(model.name).toBe('model1');

    expect(model.uuid).toBeDefined();
    expect(model.uuid).toBe(42);
  });
});
