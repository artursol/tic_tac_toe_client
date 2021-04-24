import $ from 'jquery';

const uiHelper = {
  addLog: (dateTime, message) => {
    $('#log').prepend(`</br>${message}`);
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
};

export default uiHelper;
