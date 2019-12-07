import { saveBoard } from "../utils/saveBoard";

export function handleSetBoardAction(state, { board }) {
  saveBoard(board);

  return {
    ...state,
    board
  };
}
