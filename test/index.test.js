import { expect, server, BASE_URL } from './setup';

describe('Index page test', () => {
  it('get base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.deep.equal(200);
     //   expect(res.body.message).to.deep.equal(
       //   'Environment variable is coming across.'
      //  );
        done();
      });
  });
});