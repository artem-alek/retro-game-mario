import $ from 'jquery';
import Barrel from './barrel';

class AppController {
  constructor (options) {
    this.player = options.player;
    this.computer = options.computer;
    this.barrels = [];
    this.barrelId = 1;
    this.turnCount = 0;

  }

  // checkCollisions()
  // collide(character1, character2) i.e. a player and a barrel

 // OBJECTIVE: Move event handling and intervals
 // into appcontroller to simplify models and make them easier to test

  /*

   Doing rendering based on the AppController...

   This only works to redraw every frame *if*
   your player and computer and all the barrels
   can be looped through in appcontroller and know their x and y

  THIS GOING TO RENDER
   <div id="${this.computer.id}"></div>
   ${barrelHtml}
 */

  render () {
    var barrelHtml = this.renderBarrels();
    $('#game').html(`
      <div id="${this.player.id}" class="player-${this.player.state}"></div>
      <div id="${this.computer.id}"></div>
      ${barrelHtml}
      `);
    $(`.player-${this.player.state}`).css('left', this.player.left +'px');
    $('#donkeykong').css('left', this.computer.left);
// loop barrels to update css for each one.
    this.barrels.forEach((barrel) => barrel.render());
  }

  addBarrel () {
    var barrel = new Barrel({id:this.barrelId, left:this.computer.left});
    this.barrels.push(barrel);
    this.barrelId++;
  }

  removeBarrel (barrel) {
    if (barrel.top >= 345) {
      this.barrels.splice(0,1);
    }
  }

  hit () {
    this.barrels.splice(0,1);
  }

  renderBarrels() {
    return this.barrels.map((barrel) => `<div id="${barrel.id}" class="barrel"></div>`).join('');
  }

  tick () {
    if (this.turnCount % 100 === 0) {
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


  start () {
    setInterval(this.tick.bind(this), 16);
    $('body').keydown((event) => {
      switch (event.which) {
      case 37: this.player.moveLeft(); break;
      case 39: this.player.moveRight(); break;
      }
    });
  }
}

export default AppController;
