class Board {
  constructor(el, gameContext, options) {
    const { size, fieldOptions } = options;
    this.size = size;
    this.mountElement = el;
    this.gameContext = gameContext;
    this.fieldOptions = fieldOptions;
  }
}

export default Board;
