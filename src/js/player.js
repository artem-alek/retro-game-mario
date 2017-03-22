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
      this.state = 'left';
    }
  }

  moveRight () {
    if (this.left < 285) {
      this.left += 10;
      this.state = 'right';
    }
  }

  looseLives () {
    this.lives.splice(-1,1);
    this.livesCounter -= 1;
  }

}

export default Mario;
