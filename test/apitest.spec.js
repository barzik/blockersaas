const request = require('supertest');
const app = require('../index.js');
const nock = require('nock');
const should = require('should');

describe('API', () => {
	it('test website with iframe with bad site will return true', (done) => {
		nock('http://www.mizbalax.com')
      .get('/testlink')
      .reply(200, '<iframe src="badsite.com" />');
		request(app)
      .get('/isItForbidden')
      .query({ url: 'http://www.mizbalax.com/testlink', badURL: 'badsite.com' })
      .end((err, res) =>  {
	const result = JSON.parse(res.text);
	should(result.result).be.equal(true);
	done();
});
	});

	it('test website with iframe without bad site will return false', (done) => {
		nock('http://www.mizbalax.com')
      .get('/testlink')
      .reply(200, '<iframe src="goodsite.com" />');
		request(app)
      .get('/isItForbidden')
      .query({ url: 'http://www.mizbalax.com/testlink', badURL: 'badsite.com' })
      .end((err, res) =>  {
	const result = JSON.parse(res.text);
	should(result.result).be.equal(false);
	done();
});
	});

});