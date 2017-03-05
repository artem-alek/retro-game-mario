// Import Chai
import chai from 'chai';

// Import Any Files to Test
import Player from '../src/js/player';
import Barrel from '../src/js/barrel';
import Donkeykong from '../src/js/donkeykong';
import GameWindow from '../src/js/GameWindow';

// Set Chai Constants
const assert = chai.assert;

describe('The Game -Donkey Kong Tower Toss-', function () {

  describe('Player Object', function () {

    it('should exist after we create it', function () {
      let player = new Player;
      assert.instanceOf(player, Player, 'expect player to be a instance of Player');
    });

  describe('Player Info', function() {
    
  });

  });

  describe('Barrel Object', function () {

    it('should exist afer we create it', function () {
      let barrel = new Barrel;
      assert.instanceOf(barrel, Barrel, 'expect barrel to be a instance of Barrel')
    });
  });

  describe('Donkey Kong Object', function() {

    it('should exist afer we create it', function() {
      let donkeykong = new Donkeykong;
      assert.instanceOf(donkeykong, Donkeykong, 'expect donkeykong to be a instance of Donkeykong')
    });
  });

describe('Game Window', function() {

  it('should exist after we create it', function() {
    let gameWindow = new GameWindow;
    assert.instanceOf(gameWindow, GameWindow, 'expect gameWindow to be a instance of GameWindow')
  });
});

});
