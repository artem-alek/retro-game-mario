import $ from 'jquery';
import Mario from './player';
import Donkeykong from './donkeykong';
import AppController from './gamewindow';

var player = new Mario({
  name:'mario',
  state:'right'
});


var computer = new Donkeykong();
var marioGame = new AppController({player:player, computer:computer });
$('.start-game').click(marioGame.start.bind(marioGame));

export default marioGame;
