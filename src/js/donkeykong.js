class Donkeykong {
  constructor () {
    this.id = 'donkeykong';
    this.left = 200;
    this.top = 15;
    this.turnCount = 0;
  }

  moveLeft (distance) {
    console.log(distance, 'move left');
    if (this.left > 0) {
      if (distance > 60 && this.left < 240 & this.left > 0) {
        this.left += 40;
      } else {
        this.left -= 20;
      }
    }
  }

  moveRight (distance) {
    console.log(distance, 'move right');
    if (this.left < 240) {
      if (distance > 60 && this.left < 240 && this.left > 0) {
        this.left -= 40;
      } else {
        this.left += 20;
      }
    }
  }

  update (playerLoc) {
    let distance = Math.abs(playerLoc - this.left);
    //console.log(distance);
    this.turnCount++;
    if (this.turnCount % 20 === 0) {
      if (Math.random() > 0.5) {
        this.moveLeft(distance);
      } else {
        this.moveRight(distance);
      }
    }
  }

}

export default Donkeykong;
