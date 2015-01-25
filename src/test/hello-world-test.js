import HelloWorld from '../main/hello-world';
import chai from 'chai';

let expect = chai.expect;

describe('HelloWorld', () => {

  describe('#say()', () => {

    it('should return correct string', () => {
      let helloWorld = new HelloWorld();
      expect(helloWorld.say()).to.equal('Hello World!');
    });
  });
});
