class GameContext {
  constructor(options) {
    const {
      boardSize,
      onUpdate = () => {},
      onReset = () => {},
      onStart = () => {},
    } = options;

    this.boardSize = boardSize;
    this.onUpdate = onUpdate;
    this.onStart = onStart;
    this.onReset = onReset;
  }
}

export default GameContext;
