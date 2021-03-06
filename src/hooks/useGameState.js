import { useReducer } from "react";
import {
  sudokuReducer,
  initialSudokuState,
  TOGGLE_WRITE_MODE_ACTION,
  SET_BOARD_ACTION,
  SELECT_CELL_ACTION,
  TOGGLE_VALUE_ACTION 
} from "../state/sudokuReducer";

import { highlightSimilarValues } from "../utils/highlightSimilarValues";
import { highlightBoardErrors } from "../utils/highlightBoardErrors";
import { generatePuzzle } from "../utils/generatePuzzle";

export function useGameState() {
  const [ { board, selectedCell, ...state }, dispatch ] = useReducer(sudokuReducer, initialSudokuState);

  return {
    ...state,
    selectedCell,
    board: highlightBoardErrors(highlightSimilarValues(board, selectedCell)),

    toggleWriteMode() {
      dispatch({ type: TOGGLE_WRITE_MODE_ACTION });
    },

    setBoard(board) {
      dispatch({ type: SET_BOARD_ACTION, board });
    },

    newGame(difficultyIndex, seed = Math.random() * 100000000) {
      dispatch({
        type: SET_BOARD_ACTION,
        board: generatePuzzle(difficultyIndex, seed)
      });
    },

    selectCell(selectedCell) {
      dispatch({ type: SELECT_CELL_ACTION, selectedCell });
    },

    toggleValue(value) {
      dispatch({ type: TOGGLE_VALUE_ACTION, value });
    },
  };
}
