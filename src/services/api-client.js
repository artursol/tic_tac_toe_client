import axios from 'axios';

const client = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',
});

class ApiClient {
  makeMove(params) {
    return client.post('/moves', params);
  }

  createGame(params) {
    return client.post('/games', params);
  }

  updateGameStatus(params) {
    console.log(params);
    return client.patch(`/games/${params.id}`, params);
  }

  getLogs(params) {
    const { last = 20 } = params;
    return client.get(`/games?last=${last}`);
  }
}

export default ApiClient;
