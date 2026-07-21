document.getElementById("playTicTacToe").onclick = function() {startGame()};
function startGame() {
  const boardElement = document.getElementById("ticTacToe");
  for (let i = 0; i < 9; i++) {
  const cell = document.createElement('button');
  cell.classList.add('cell');
  cell.dataset.index = i; // Store the cell's index (0-8)
  boardElement.appendChild(cell);
  }
}
boardElement.addEventListener('click', (event) => {
  // Make sure the click was actually on a cell, not the gap between cells
  if (!event.target.classList.contains('cell')) return;
  // Get the index of the clicked cell
  const cellIndex = event.target.dataset.index;
  // Trigger your turn logic here!
  handleCellClick(event.target, cellIndex);
});

function handleCellClick(cellElement, index) {
  // 1. Check if cell is already filled or game is over
  // 2. Update your game state array
  // 3. Update cell text (e.g., cellElement.textContent = currentPlayer)
  // 4. Check for win or draw
  // 5. Switch to the next player
}
