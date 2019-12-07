import { saveBoard } from "../utils/saveBoard";

export function handleToggleValueAction(state, { value }) {
  const { isInsertingValue, selectedCell, board: oldBoard } = state;

  if (!selectedCell || !oldBoard) {
    return state;
  }

  const { x, y } = selectedCell;
  const board = [...oldBoard];

  if (board[y][x].isReadOnly === true) {
    return state;
  }

  if (isInsertingValue) {
    if (board[y][x].value === value) {
      board[y][x].value = null;
    } else {
      board[y][x].value = value;
    }
  } else {
    board[y][x].candidates[value] = !board[y][x].candidates[value];
  }

  saveBoard(board);
  
  return {
    ...state,
    board
  };
}
