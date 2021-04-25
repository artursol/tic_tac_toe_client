import $ from 'jquery';
import moment from 'moment';

const uiHelper = {
  addLog: (time, message) => {
    const formatted = moment.utc(time).local().format('YYYY-MM-DD HH:mm:ss');
    $('#log').prepend(`</br>${formatted} | ${message}`);
  },

  setGameText: (status, actionType) => {
    let text = '';
    switch (status) {
      case 0: {
        text = 'Draw';
        break;
      }
      case 1: {
        text = `Player ${actionType === 'X' ? '1' : '2'} moves`;
        break;
      }
      case 2: {
        text = 'Player 1 won';
        break;
      }
      case 3: {
        text = 'Player 2 won';
        break;
      }
      default: {
        text = 'Please reset game';
      }
    }
    $('body #game-text').html(text);
  },

  showReload: () => {
    alert('Can not connect to API, please refresh browser');
  },

  domElements: {
    x: $(
      '<svg width="100" height="100" viewbox="0 0 40 40">'
        + '<path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"/>'
        + '</svg>',
    ),
    o: $(
      '<svg width="100" height="100" fill="transparent">'
        + '<circle cx="50" cy="50" r="32" stroke="#a26c6c" stroke-width="10"></circle>'
        + '</svg>',
    ),
  },
};

export default uiHelper;
