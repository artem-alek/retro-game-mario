import $ from 'jquery';

class Mario {
  constructor (options) {
    options = options || {};
    this.lives = [1,2,3];
    this.livesCounter = 3;
    this.name = options.name;
    this.id = 'player';
    this.left = 110;
    this.top = 218.5;
    this.state = options.state;
  }

  moveLeft () {
    if (this.left > 0) {
      this.left -= 10;
      this.runLeft();
    }
  }

  runRight () {
    this.runRightState();
    setTimeout(() => {
      this.standRight();
    }, 200);
  }

  runLeft () {
    this.runLeftState();
    setTimeout(() => {
      this.standLeft();
    }, 200);
  }

  moveRight () {
    if (this.left < 270) {
      this.left += 10;
      this.runRight();
    }
  }

  looseLives () {
    this.lives.splice(-1,1);
    this.livesCounter -= 1;
  }

  runRightState () {
    this.state = 'runRight';
  }

  runLeftState () {
    this.state = 'runLeft';
  }

  standLeft () {
    this.state = 'left';
  }

  standRight () {
    this.state = 'right';
  }
}

export default Mario;
