// Import Chai
import chai from 'chai';

// Import Any Files to Test
import Player from '../src/js/player';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('the game', function () {

  describe('player constructor', function () {

    it('should exist after we create it', function () {
      let player = new Player;
      expect(player).to.be.an.instanceof(Player);
    });

  });


});
