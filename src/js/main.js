import $ from 'jquery';
import Player from './player';
import AppController from './gamewindow';

var mario = new Player({lives:3, name:'mario'});
var marioGame = new AppController(mario);


console.log(mario)
console.log(marioGame);
//$('.start-game').click(marioGame.start);

marioGame.start();
