import $ from 'jquery';
import Mario from './player';
import Donkeykong from './donkeykong';
import AppController from './gamewindow';
//import Barrel from './barrel';

var player = new Mario({
  lives:3,
  name:'mario',
  state:'right'
});


var computer = new Donkeykong();

var marioGame = new AppController({player:player, computer:computer });

//console.log(marioGame);

$('.start-game').click(marioGame.start.bind(marioGame));
