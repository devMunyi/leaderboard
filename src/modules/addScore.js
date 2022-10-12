import { API_BASE_URL, GAME_KEY } from './configs.js';
import populateScoreList from './populateScoreList.js';

const addScore = async ({ user, score }) => {
  const response = await fetch(`${API_BASE_URL}/games/${GAME_KEY}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    // call populateScoreList to update UI
    populateScoreList();
  } else {
    // handle possible error(s)
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export default addScore;
