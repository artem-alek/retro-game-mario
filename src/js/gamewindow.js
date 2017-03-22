import $ from 'jquery';
import Barrel from './barrel';

class AppController {
  constructor (options) {
    this.player = options.player;
    this.computer = options.computer;
    this.barrels = [];
    this.barrelId = 1;
    this.turnCount = 0;
    this.startgame
  }

  render () {
    var barrelHtml = this.renderBarrels();
    $('#game').html(`
      <div id="${this.player.id}" class="player-${this.player.state}"></div>
      <div id="${this.computer.id}"></div>
      ${barrelHtml}
      `);
    $('#donkeykong').css('top', this.computer.top + 'px');
    $('#player').css('top', this.player.top + 'px');
    $(`.player-${this.player.state}`).css('left', this.player.left +'px');
    $('#donkeykong').css('left', this.computer.left);
// loop barrels to update css for each one.
    this.barrels.forEach((barrel) => barrel.render());
  }

  renderBarrels() {
    return this.barrels.map((barrel) => `<div id="${barrel.id}" class="barrel"></div>`).join('');
  }

  tick () {
    if (this.turnCount % 50 === 0) {
      this.addBarrel();
    }

    this.barrels.forEach((barrel) => {
      barrel.checkHit(this.player);
      barrel.update();
    });
    this.barrels.forEach((barrel) => {
      this.removeBarrel(barrel);
    });

    this.computer.update();
    this.render();
    this.turnCount++;
  }

  addBarrel () {
    var barrel = new Barrel({id:this.barrelId, left:this.computer.left});
    this.barrels.push(barrel);
    this.barrelId++;
  }

  removeBarrel (barrel) {
    if (barrel.top >= 245) {
      this.barrels.splice(0,1);
    }
  }

  hit () {
    this.barrels.splice(0,1);
    this.player.lives -= 1;
    console.log(this.player.lives);
    this.endGame();
  }

  start () {
    $('.black-screen').css('opacity', 0);
    $('#welcome-screen').addClass('welcome');
    setTimeout( () => {
      this.startgame = setInterval(this.tick.bind(this), 16);
      $('#welcome-screen').removeClass('welcome');
    }, 3600);
    $('body').keydown((event) => {
      switch (event.which) {
      case 37: this.player.moveLeft();
        $('.left-arrow').css('opacity', .5);
        break;
      case 39: this.player.moveRight();
        $('.right-arrow').css('opacity', .5);
        break;
      }
    });
    $('body').keyup((event) => {
      switch (event.which) {
      case 37:
        $('.left-arrow').css('opacity', 0);
        break;
      case 39:
        $('.right-arrow').css('opacity', 0);
        break;
      }
    });
    $('.power').css('opacity', 1);
  }

  endGame () {
    if (this.player.lives === 0) {
      clearInterval(this.startgame);
      console.log('game over');
    }
  }
}

export default AppController;
