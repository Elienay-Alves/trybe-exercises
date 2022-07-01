const fs = require('fs');
const sinon = require('sinon')
const { expect } = require('chai');
const readFile = require('./readFile');

const FILE = 'The Quarry';


describe('Read file', () => {
  describe('When the file exists', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('the answer', () => {
      it('it\'s a string', () => {
        const answer = readFile('file.txt');

        expect(answer).to.be.a('string');
      });

      it('it\'s equal the file content', () => {
        const answer = readFile('file.txt');

        expect(answer).to.be.equals(FILE);
      });
    });
  });

  describe('When the file don\'t exists', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('File not found'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('the answer', () => {
      it('it\'s equal "null"', () => {
        const answer = readFile('file_that_do_not_exists.txt');
        
        expect(answer).to.be.equal(null);
      });
    });
  });
});