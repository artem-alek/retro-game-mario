import $ from 'jquery';
import Barrel from './barrel';

class Donkeykong {
  constructor () {

  }

  moveComputer() {
    var id = 1;
    var newLeft = Number.parseFloat($('#donkeykong').css('left'));

    setInterval(() => {
      var randomNum = this.randomMove(0,2);

      if (randomNum === 0) {
        newLeft += 40;
        $('#donkeykong').css({ 'left': newLeft + 'px' });}
      if (randomNum === 1) {
        newLeft -= 40;
        $('#donkeykong').css({ 'left': newLeft + 'px' });}
      // console.log($('#donkeykong').position());
    }, 200);

    setInterval(() => {
      this.position = $('#donkeykong').position();

      var left = this.position.left;
      var top = this.position.top;
      var barrel = new Barrel({
        id:id,
        left:left,
        top:top,
      });

      console.log(barrel, 'new barrel');
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

  randomMove(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default Donkeykong;
