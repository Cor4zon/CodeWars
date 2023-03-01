function chessBoard(rows, columns) {
  const white = 'O';
  const black = 'X';
  let previous = white;
  const board = [];

  for (let i = 0; i < rows; i++) {
    previous = previous === black ? black : white;
    const currentBoardLine = [];
    for (let j = 0; j < columns; j++) {
      if (previous === black) {
        currentBoardLine.push(white);
        previous = white;
      } else {
        currentBoardLine.push(black);
        previous = black;
      }
    }
    board.push(currentBoardLine);
  }
  return board;
}

console.log(chessBoard(7, 7));