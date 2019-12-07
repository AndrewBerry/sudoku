export function highlightSimilarValues(currentBoard, selectedCell) {
  if (!currentBoard || !selectedCell) {
    return currentBoard;
  }

  const targetValue = currentBoard[selectedCell.y][selectedCell.x].value;

  if (!targetValue) {
    return currentBoard;
  }

  const board = JSON.parse(JSON.stringify(currentBoard));

  for (let y = 0; y < 9; y += 1) {
    for (let x = 0; x < 9; x += 1) {
      const currentValue = board[y][x].value;

      if (currentValue === targetValue && (x !== selectedCell.x || y !== selectedCell.y)) {
        board[y][x].isHighlighted = true;
      }
    }
  }

  return board;
}