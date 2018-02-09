const request = require('supertest');
import app from './../../../server';

describe('Test the root path', () => {

  test('It should response the GET method', done => {

    request(app)
      .get('/account/get')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });

  });

});