class Donkeykong {
  constructor () {
    this.id = 'donkeykong';
    this.left = 200;
    this.top = 0;
    this.turnCount = 0;
  }


  moveLeft () {
    if (this.left > 0) {
      this.left -= 20;
    }
  }

  moveRight () {
    if (this.left < 240) {
      this.left += 20;
    }
  }

  update () {
    this.turnCount++;
    if (this.turnCount % 50 === 0) {
      if (Math.random() > 0.45) {
        this.moveLeft();
      } else {
        this.moveRight();
      }
    }
  }

}

export default Donkeykong;
