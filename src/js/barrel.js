import $ from 'jquery';

class Barrel {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.left = options.left + 12;
    this.top = 15;
    this.turnCount = 0;
  }

  update () {
    if (this.top <= 690) {
      this.top += 5;
    }
  }

  checkHit () {

  }

  render () {
    $(`#${this.id}`).css({'top':this.top,'left':this.left});
  }
}
export default Barrel;
