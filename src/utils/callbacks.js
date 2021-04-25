import ApiClient from '../services/api-client';
import uiHelper from '../helpers/ui-helper';

const apiClient = new ApiClient();

export const onStart = async (gameContext) => {
  const response = await apiClient.createGame({
    boardSize: gameContext.boardSize,
    status: gameContext.statusText,
  }).catch(() => { uiHelper.showReload(); });

  const { data: { id, log: { created_at, message } } } = response;
  gameContext.gameId = id;
  uiHelper.addLog(created_at, message);
};

export const onClick = async (moveNumber, moveType, gameId, position) => {
  const response = await apiClient.makeMove({
    moveNumber,
    type: moveType,
    position,
    gameId,
  }).catch(() => { uiHelper.showReload(); });

  const { data: { log: { created_at, message } } } = response;
  uiHelper.addLog(created_at, message);
};

export const onReset = async (gameContext) => {
  const { gameId, status } = gameContext;

  if (status === 1) {
    const response = await apiClient.updateGameStatus({
      id: gameId,
      status: 'stopped',
    }).catch(() => { uiHelper.showReload(); });

    const { data: { log: { created_at, message } } } = response;
    uiHelper.addLog(created_at, message);
  }
  uiHelper.setGameText(1, 'X');
};

export const onUpdate = async (gameContext) => {
  const { status, actionType, gameId } = gameContext;

  if ([0, 2, 3].includes(status)) {
    const response = await apiClient.updateGameStatus({
      id: gameId, status: gameContext.statusText(),
    }).catch(() => { uiHelper.showReload(); });

    const { data: { log: { created_at, message } } } = response;
    uiHelper.addLog(created_at, message);
  }
  uiHelper.setGameText(status, actionType);
};
