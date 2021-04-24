import $ from 'jquery';
import Field from './field';

class Board {
  constructor(el, gameContext, options) {
    const { size, fieldOptions } = options;
    this.size = size;
    this.mountElement = el;
    this.gameContext = gameContext;
    this.fieldOptions = fieldOptions;

    this.setup();
  }

  setup() {
    this.fields = [];
    this.createFields();
  }

  createFields() {
    for (let row = 0; row < this.size; row++) {
      const rowEl = $("<div class='row'></div>");
      this.mountElement.append(rowEl);

      for (let col = 0; col < this.size; col++) {
        const field = new Field([row, col], this.gameContext, this.fieldOptions);
        rowEl.append(field.domElement);
        this.fields.push(field);
      }
    }
  }

  reset() {
    this.mountElement.empty();
    this.setup();
  }
}

export default Board;
