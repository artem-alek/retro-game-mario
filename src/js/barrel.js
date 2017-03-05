import $ from 'jquery';
class Barrel {
  constructor (options) {
    options = options || {};
  }

  template () {
    $('#game').append(`
      <div id="1" class="barrel"></div>
    `);
  }
}

export default Barrel;
