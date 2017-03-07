import $ from 'jquery';
import Barrel from './barrel';

class Donkeykong {
  constructor () {
     // this.left = 200;
     // this.turnCount = 0;
  }

  /*

  moveLeft () {
    this.left -= 40;
  }

  moveRight () {
    this.left += 40;
  }

  update () {
    turnCount++;
    if (this.turnCount % 5 === 0) {
      if (Math.random() > 0.5) {
        this.moveLeft();
      else {
        this.moveRight();
      }
    }
  }

  */

  moveComputer() {
    //var id = 1;
    this.monkeyRandom();

    var id = 1;
    setInterval(() => {
      var position = $('#donkeykong').position();
      var left = position.left;
      var top = position.top;


      var barrel = new Barrel({
        id:id,
        left:left,
        top:top,
      });

      //console.log(barrel, 'new barrel');
      barrel.template();
      barrel.placeBarrel();
      barrel.fallBarrel();
      id += 1;
    },4000);
  }

  template () {
    $('#game').append(`
      <div id="donkeykong"></div>
    `);
  }

  //change random function to be if (math.random() > 0.5)
  randomMove(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  monkeyRandom () {
    setInterval(() => {
      var newLeft = Number.parseFloat($('#donkeykong').css('left'));
      var randomNum = this.randomMove(0,2);

      if (randomNum === 0) {
        newLeft += 40;
        $('#donkeykong').css({ 'left': newLeft + 'px' });
      }
      if (randomNum === 1) {
        newLeft -= 40;
        $('#donkeykong').css({ 'left': newLeft + 'px' });}
      // console.log($('#donkeykong').position());
    }, 1000);
  }
}

export default Donkeykong;
