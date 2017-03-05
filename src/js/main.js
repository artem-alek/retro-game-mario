import $ from 'jquery';
import Mario from './player';
import Donkeykong from './donkeykong';
import AppController from './gamewindow';
import Barrel from './barrel';

var player = new Mario({lives:3, name:'mario'});
var computer = new Donkeykong();
var barrel = new Barrel();

var marioGame = new AppController({player:player, computer:computer, barrel:barrel });
console.log(marioGame)
//$('#game').append('<div id="donkeykong"></div>');

$('.start-game').click(marioGame.start.bind(marioGame));
