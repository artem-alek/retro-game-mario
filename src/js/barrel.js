import $ from 'jquery';
import marioGame from './main';

class Barrel {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.left = options.left + 12;
    this.top = 15;
    this.turnCount = 0;
  }

  update () {
    if (this.turnCount % 500 === 0) {
      this.top += 5;
    }
  }

  render () {
    $(`#${this.id}`).css({'top':this.top,'left':this.left});
  }
}
export default Barrel;
