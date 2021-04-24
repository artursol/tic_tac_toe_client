import $ from 'jquery';
import Game from './game/game';
import {
  onUpdate,
  onReset,
  onClick,
  onStart,
} from './utils/callbacks';

import './css/main.scss';
import './css/logs.scss';
import './css/board.scss';
import './css/field.scss';

const gameOptions = {
  boardOptions: {
    size: 3,
  },
  contextOptions: {
    onUpdate,
    onStart,
    onReset,
  },
  fieldOptions: {
    onClick,
  },
};

class App {
  start() {
    const mountEl = $('#board');
    const game = new Game(mountEl, gameOptions);
    $('a#reset').click(() => { game.reset(); });
  }
}

$(() => { (new App()).start(); });
