import $ from 'jquery'

class Donkeykong {
  constructor () {

  }

  template () {
    $('#game').append(`
      <div id="donkeykong"></div>
    `);
  }
}

export default Donkeykong;
