import $ from 'jquery';

class Mario {
  constructor (options) {
    options = options || {};
    this.lives = options.lives;
    this.name = options.name;
    //this.gameWindow = $('.game-container');
    //this.playerSprite = $('#player');

  }

  movePlayer () {
    $('body').keyup(function(event) {
      switch (event.which) {
      case 37: // left arrow key
        //$('#player').animate({ 'left': '-=5' }, 'fast');
        $('#player').css('left', '-=5');
        break;
      case 39: // right arrow key
        //$('#player').animate({ 'left': '+=5' }, 'fast');
        $('#player').css('left', '+=5');
        break;
      }
    });
  }

  template () {
    $('#game').append(`
      <div id="player" class="player-stand"></div>
    `);
  }
}


export default Mario;
