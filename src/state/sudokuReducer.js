import { handleSetBoardAction } from "./handleSetBoardAction";
import { handleSelectCellAction } from "./handleSelectCellAction";
import { handleToggleWriteModeAction } from "./handleToggleWriteModeAction";
import { handleToggleValueAction } from "./handleToggleValueAction";

export const SET_BOARD_ACTION = "SET_BOARD";
export const SELECT_CELL_ACTION = "SELECT_CELL";
export const TOGGLE_WRITE_MODE_ACTION = "TOGGLE_WRITE_MODE";
export const TOGGLE_VALUE_ACTION = "TOGGLE_VALUE";

export const initialSudokuState = {
  isInsertingValue: true,
  selectedCell: null,
  board: null
};

const actionHandlers = {
  [SET_BOARD_ACTION]: handleSetBoardAction,
  [SELECT_CELL_ACTION]: handleSelectCellAction,
  [TOGGLE_WRITE_MODE_ACTION]: handleToggleWriteModeAction,
  [TOGGLE_VALUE_ACTION]: handleToggleValueAction,
};

export function sudokuReducer(state, action) {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type].call(null, state, action);
  }

  return state;
}
