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

    this.setup();
  }

  setup() {
    this.status = 1;
    this.gameId = null;
    this.actionType = 'X';
    this.numberOfMoves = 0;
    this.rowsProgress = [0, 0, 0];
    this.diagonalsProgress = [0, 0];
    this.columnsProgress = [0, 0, 0];
    this.numberOfFields = this.boardSize * this.boardSize;
    this.diagonalPositions = this.getDiagonalPositions();

    this.onStart(this);
    this.onUpdate(this);
  }

  update({ type, position, diagonals }) {
    const progressValue = type === 'X' ? 1 : -1;
    this.actionType = type === 'X' ? 'O' : 'X';
    this.numberOfMoves++;
    this.rowsProgress[position[0]] += progressValue;
    this.columnsProgress[position[1]] += progressValue;

    diagonals.forEach((e, index) => {
      if (e) this.diagonalsProgress[index] += progressValue;
    });

    this.checkStatus();
    this.onUpdate(this);
  }

  checkStatus() {
    const rowFinished = [
      ...this.rowsProgress,
      ...this.columnsProgress,
      ...this.diagonalsProgress,
    ]
      .map((e) => Math.abs(e))
      .includes(this.boardSize);

    if (rowFinished) {
      this.status = this.actionType == 'X' ? 3 : 2;
    } else if (this.numberOfMoves >= this.numberOfFields) {
      this.status = 0;
    }
  }

  getDiagonalPositions() {
    const diagonal1Point = [0, 0];
    const diagonal2Point = [0, this.boardSize - 1];
    const positions = { diagonal1: [], diagonal2: [] };

    for (let index = 0; index < this.boardSize; index++) {
      positions.diagonal1.push([...diagonal1Point]);
      diagonal1Point[0]++;
      diagonal1Point[1]++;
      positions.diagonal2.push([...diagonal2Point]);
      diagonal2Point[0]++;
      diagonal2Point[1]--;
    }
    return positions;
  }

  statusText() {
    return gameStatuses[this.status];
  }

  async reset() {
    await this.onReset(this);
    await this.setup();
  }
}

const gameStatuses = [
  'draw',
  'started',
  'player1won',
  'player2won',
  'stopped',
];

export default GameContext;
