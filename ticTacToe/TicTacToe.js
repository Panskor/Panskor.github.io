const boardElement = document.getElementById("ticTacToe");
document.getElementById("playTicTacToe").onclick = function() {startGame()};
function startGame() {
  boardElement.classList.remove('hidden');
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
let cells = [];
for(let i=0; i<9; i++){
  cells[i] = "";
}
let gameover = false;
function checkWinner(){
  if(cells[0]==cells[1] && cells[0]==cells[2] &&cells[0] != ""||
     cells[3]==cells[4] && cells[5]==cells[3] &&cells[5] != ""||
     cells[6]==cells[7] && cells[8]==cells[6] &&cells[8] != ""||
     cells[0]==cells[3] && cells[6]==cells[0] &&cells[6] != ""||
     cells[1]==cells[4] && cells[7]==cells[1] &&cells[7] != ""||
     cells[2]==cells[5] && cells[8]==cells[2] &&cells[8] != ""||
     cells[0]==cells[4] && cells[8]==cells[0] &&cells[8] != ""||
     cells[6]==cells[4] && cells[2]==cells[6] &&cells[2] != ""){
      return true;
     } else {
      return false;
     }
}
function checkDraw(){
  for(let i=0; i<9; i++){
    if(cells[i]===""){
      return false;
    }
  }
  return true;
}
let activePlayer = 'X';
function isFull(cell){
  if(cells[cell] === ""){
    return false;
  } else {
    return true;
  }
}
function nextPlayer(){
  if(activePlayer == 'X'){
    activePlayer = 'O';
  } else {
    activePlayer = 'X';
  }
}

function handleCellClick(cellElement, index) {
  if(gameover){return;}
  if(isFull(index)){return;}
  cells[index] = activePlayer;
  cellElement.textContent = activePlayer;
  if(checkWinner()){
    window.alert(activePlayer + " wins!");
  }
  if(checkDraw()){
    window.alert("It's a draw!");
  }
  nextPlayer();
}
