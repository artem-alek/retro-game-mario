class Donkeykong {
  constructor () {
    this.id = 'donkeykong';
    this.left = 150;
    this.top = 15;
    this.turnCount = 0;
  }

  moveLeft (distance) {
    if (this.left > 0) {
      if (distance > 60 && this.left < 240 & this.left > 0) {
        this.left -= 60;
      } else {
        this.left -= 20;
      }
    }
  }

  moveRight (distance) {
    if (this.left < 240) {
      if (distance < -60 && distance < 0 && this.left < 240 && this.left > 0) {
        this.left += 60;
      } else {
        this.left += 20;
      }
    }
  }

  update (playerLoc) {
    let distance = this.left - playerLoc;
    this.turnCount++;
    if (this.turnCount % 20 === 0) {
      if (Math.random() > 0.5) {
        this.moveLeft(distance);
      } else {
        this.moveRight(distance);
      }
    }
  }

  dropAnimiation () {

  }

}

export default Donkeykong;
