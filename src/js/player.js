import $ from 'jquery';

class Mario {
  constructor (options) {
    options = options || {};
    this.lives = options.lives;
    this.name = options.name;
    this.id = '#player';
    this.left = 110;
    this.top = 262;
    this.state = options.state;
  }

  // Player has an id on the page (in the DOM) "player"
  // Player has an action state which is a class "player-stand"

  render () {
    $(this.id).css('left', this.left + 'px');
    $(this.id).css('top', this.top + 'px');
  }

  moveLeft () {
    this.left -= 5;
    this.state = 'left';
  }

  moveRight () {
    this.left += 5;
    this.state = 'right';
  }

  // movePlayer () {
  //   $('body').keyup(function(event) {
  //     switch (event.which) {
  //     case 37: // left arrow key
  //       //$('#player').animate({ 'left': '-=5' }, 'fast');
  //       $('#player').css('left', '-=5');
  //       break;
  //     case 39: // right arrow key
  //       //$('#player').animate({ 'left': '+=5' }, 'fast');
  //       $('#player').css('left', '+=5');
  //       break;
  //     }
  //   });
  // }

//   template () {
//     $('#game').append(`
//       <div id="player" class="player-stand"></div>
//     `);
//   }
}


export default Mario;
