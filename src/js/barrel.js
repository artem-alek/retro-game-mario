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
    if (this.top <= 245) {
      this.top += 1.5;
    }
  }

  checkHit (player) {
    var vertDistance = Math.abs(player.top - this.top);
    var horiDistance = Math.abs(player.left - this.left);
    if (vertDistance < 10 && horiDistance < 18) {
      // marioGame.barrels.splice(0,1);
      marioGame.hit();
    }
  }

  render () {
    $(`#${this.id}`).css({'top':this.top,'left':this.left});
  }
}
export default Barrel;
