import $ from 'jquery';
class Barrel {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.left = options.left + 12;
    //this.left = options.left;
    this.top = options.top;
  }

  template () {
    $('#game').append(`
      <div id="${this.id}"
        class="barrel"></div>
      `);

    //$(`#${this.id}`).css('top', '100');
  }

  placeBarrel () {
    console.log(this.left, 'from inside place barrel');
    $(`#${this.id}`).css({
      'background': `url('../images/donkeyKong game sprite.gif') no-repeat -96px -259px`,
    	'width': 15 + 'px',
    	'height': 10 + 'px',
      'position': 'absolute',
      //'zoom':2,
      'left': (this.left) + 'px',
      'top': '15px'
    });
  }

  // fallBarrel () {
  //   // setInterval(() => {
  //   //   $(`${this.id}`)
  //
  //   },200);
  // }


}
export default Barrel;
