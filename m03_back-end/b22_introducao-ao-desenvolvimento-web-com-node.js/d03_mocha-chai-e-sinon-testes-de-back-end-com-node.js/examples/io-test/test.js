const { expect } = require('chai');
const readFile = require('./readFile');

const FILE = 'The Quarry';

describe('Read file', () => {
  describe('When the file exists', () => {
    describe('the answer', () => {
      const answer = readFile('file.txt');

      it('it\'s a string', () => {
        expect(answer).to.be.a('string');
      });

      it('it\'s equal the file content', () => {
        expect(answer).to.be.equals(FILE);
      });
    });
  });

  describe('When the file don\'t exists', () => {
    describe('the answer', () => {
      const answer = readFile('file_that_do_not_exists.txt');
      it('it\'s equal "null"', () => {
        expect(answer).to.be.equal(null);
      });
    });
  });
});