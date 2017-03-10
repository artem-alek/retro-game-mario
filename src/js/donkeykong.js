import $ from 'jquery';
import Barrel from './barrel';

class Donkeykong {
  constructor () {
    this.id = 'donkeykong';
    this.left = 200;
    this.top = 0;
    this.turnCount = 0;
  }


  moveLeft () {
    this.left -= 40;
  }

  moveRight () {
    this.left += 40;
  }

  update () {
    this.turnCount++;
    if (this.turnCount % 50 === 0) {
      if (Math.random() > 0.5) {
        this.moveLeft();
      } else {
        this.moveRight();
      }
    }
  }

}

export default Donkeykong;
