import getScoresList from './getScoresList.js';

const populateScoreList = async () => {
  const scoreList = await getScoresList();

  const scoreListElement = document.getElementById('score-list');
  scoreListElement.innerHTML = `<i>Loading...</i>`;

  let row = '';
  let count = 0;

  scoreList.forEach((item) => {
    count += 1;
    row += `<tr>
            <th scope="row">${count}</th>
            <td>${item.user}</td>
            <td>${item.score}</td>
          </tr>`;
  });

  // append to html element
  scoreListElement.innerHTML = row;
};

export default populateScoreList;
