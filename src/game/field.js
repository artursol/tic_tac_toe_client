import $ from 'jquery';
import uiHelper from '../helpers/ui-helper';

const { domElements } = uiHelper;

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

    this.setDiagonals();
    this.setEvents();
  }

  setEvents() {
    this.domElement.click(async () => {
      if (this.touched || this.gameContext.status !== 1) return;

      const { numberOfMoves, actionType, gameId } = this.gameContext;
      await this.onClickCallback(numberOfMoves + 1, actionType, gameId, this.position);
      this.touched = true;
      this.type = this.gameContext.actionType;
      this.domElement.addClass(`touched ${this.type}`);
      this.domElement.append(this.type === 'X' ? domElements.x.clone() : domElements.o.clone());

      this.gameContext.update({
        type: this.type,
        position: this.position,
        diagonals: [
          this.inDiagonal1,
          this.inDiagonal2,
        ],
      });
    });
  }

  setDiagonals() {
    const { diagonal1, diagonal2 } = this.gameContext.diagonalPositions;
    [diagonal1, diagonal2].forEach((positions, index) => {
      this[`inDiagonal${index + 1}`] = !!positions.find((e) => e[0] === this.position[0] && e[1] === this.position[1]);
    });
  }
}

export default Field;
