class Mario {
  constructor (options) {
    options = options || {};
    this.lives = options.lives;
    this.name = options.name;
    this.id = 'player';
    this.left = 110;
    this.top = 232;
    this.state = options.state;
  }

  moveLeft () {
    if (this.left > 0) {
      this.left -= 5;
      this.state = 'left';
    }
  }

  moveRight () {
    if (this.left < 285) {
      this.left += 5;
      this.state = 'right';
    }
  }
}

export default Mario;
