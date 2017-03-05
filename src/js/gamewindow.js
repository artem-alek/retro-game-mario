import $ from 'jquery';

class AppController {
  constructor (options) {
    this.player = options.player;
    this.computer = options.computer;

  }

  start() {
    console.log(this.player);
    //load all models
    this.computer.template();
    this.player.template();



    //ability to move player
    setInterval(this.player.movePlayer(), 200);




  }
}

export default AppController;
