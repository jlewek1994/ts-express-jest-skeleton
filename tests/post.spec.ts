import 'jest';
import * as request from 'supertest';
import { app } from '../src/index';

describe('Jest Tests', () => {
  test('Verify Tests Work', () => {
    expect(true).toBeTruthy();
  })
})

describe('GET /api/', () => {
  it('/post/10 respond with and json', (done) => {
    request(app)
      .get('/api/post/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
})
