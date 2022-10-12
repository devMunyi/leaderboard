import { API_BASE_URL, GAME_KEY } from './configs.js';

const getScoresList = async () => {
  const response = await fetch(`${API_BASE_URL}/games/${GAME_KEY}/scores`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  // for success response
  if (response.ok) {
    // update UI scores list
    const { result } = await response.json();

    // result score list
    return result;
  }
  // handle possible error(s)
  throw new Error(`HTTP error! status: ${response.status}`);
};

export default getScoresList;
