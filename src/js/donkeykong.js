import $ from 'jquery';

class Donkeykong {
  constructor () {

  }

  moveComputer() {
    setInterval(() => {
      if (this.randomMove(0,2) === 0) { $('#donkeykong').css( 'left', '-=20');}
      if (this.randomMove(0,2) === 1) { $('#donkeykong').css( 'left', '+=20');}
    }, 200);
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
