import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addScore from './modules/addScore.js';
import populateScoreList from './modules/populateScoreList.js';

// listen to form submission
const formElement = document.getElementById('add-score-form');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  // get form input data
  const userElement = document.getElementById('name-input');
  const scoreElement = document.getElementById('score-input');

  // add score
  addScore({ user: userElement.value, score: scoreElement.value });

  // clear input fields
  formElement.reset();
});

// refresh list
const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', populateScoreList);
