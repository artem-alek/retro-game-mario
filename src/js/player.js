import $ from 'jquery';

class Player {
  constructor (option) {
    option = option || {};
    this.lives = option.lives;
    this.name = option.name;
    this.gameWindow = $('.game-container');
    this.playerSprite = $('#player');

  }

  movePlayer () {
    $('body').keyup(function(event) {
      switch (event.which) {
      case 37: // left arrow key
        $('#player').animate({ 'left': '-=100' }, 'fast');
        break;
      case 39: // right arrow key
        $('#player').animate({ 'left': '+=100' }, 'fast');
        break;
      }
    });
  }

  playerTemplate () {
    return `
      <div id="player" class="player-stand"></div>
    `;
  }
}


export default Player;
