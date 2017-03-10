import $ from 'jquery';
import Barrel from './barrel';

class AppController {
  constructor (options) {
    this.player = options.player;
    this.computer = options.computer;
    this.barrels = [];
    this.barrelId = 1;
    this.turnCount = 0;
    //this.barrel = options.barrel;

  }

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
    //var barrelHtml = this.renderBarrels();
    $('#game').html(`
      <div id="${this.player.id}" class="player-${this.player.state}"></div>
      <div id="${this.computer.id}"></div>
      `);
    $(`.player-${this.player.state}`).css('left', this.player.left +'px');
    $('#donkeykong').css('left', this.computer.left);
// loop barrels to update css for each one.
    // this.barrels.forEach(function (barrel) {
    //   $(`#${barrel.id}`).css('top', barrel.top);
    // });
  }

  tick () {
    // if (this.turnCount % 20 === 0) {
    //   var barrel = new Barrel(this.barrelId, this.computer);
    //   this.barrels.push(barrel);
    //   this.barrelId++;
    // }
    // this.barrels.forEach(function (barrel) {
    //   barrel.update();
    // });
    this.computer.update();
    this.render();
  }


  start () {
    setInterval(this.tick.bind(this), 16);
    $('body').keyup((event) => {
      switch (event.which) {
      case 37: this.player.moveLeft(); break;
      case 39: this.player.moveRight(); break;
      }
    });
  }


//   start() {
//     //console.log(this.player);
//     //load all models
//     this.computer.template();
//     this.player.template();
//
//     //ability to move player
//     setInterval(this.player.movePlayer(), 200);
//
//     this.computer.moveComputer();
//   }
// }
}

export default AppController;
