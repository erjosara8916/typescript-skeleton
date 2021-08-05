import request from 'supertest';

import { app } from '../src/app';

describe('Helpers request', () => {
  describe('GET /', () => {
    it('return with status 200', () => {
      return request(app).get(`/`).expect(200);
    });
  });
});
