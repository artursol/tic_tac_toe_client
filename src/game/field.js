import $ from 'jquery';

class Field {
  constructor(position, gameContext, options) {
    const { onClick } = options;

    this.touched = false;
    this.inDiagonal1 = false;
    this.inDiagonal2 = false;
    this.position = position;
    this.gameContext = gameContext;
    this.onClickCallback = onClick;
    this.domElement = $('<div class=\'field\'></div>');
  }
}

export default Field;
