import Board from './board';
import GameContext from './game-context';

class Game {
  constructor(el, options) {
    const {
      boardOptions,
      contextOptions,
      fieldOptions,
    } = options;

    boardOptions.fieldOptions = fieldOptions;
    contextOptions.boardSize = boardOptions.size;

    this.gameContext = new GameContext(contextOptions);
    this.board = new Board(el, this.gameContext, boardOptions);
  }

  reset() {
    this.gameContext.reset();
    this.board.reset();
  }
}

export default Game;
