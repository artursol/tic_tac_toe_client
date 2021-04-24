import $ from 'jquery';
import Game from './game/game';

const gameOptions = {
  boardOptions: {
    size: 3,
  },
  contextOptions: {
  },
  fieldOptions: {
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
