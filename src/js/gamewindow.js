import $ from 'jquery';

class AppController {
  constructor (player) {
    this.player = player;
    this.startButton = $('.start-game');
  }

  start() {
    this.startButton.click(() =>
    setInterval(this.player.movePlayer(), 200));
  }
}

export default AppController;
