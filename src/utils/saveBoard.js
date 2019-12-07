export function saveBoard(board) {
  if (!board) {
    return;
  }

  window.localStorage.setItem("sudoku", JSON.stringify(board));
}
