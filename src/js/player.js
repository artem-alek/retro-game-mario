import $ from 'jquery';

class Mario {
  constructor (option) {
    option = option || {};
    this.lives = option.lives;
    this.name = option.name;
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
