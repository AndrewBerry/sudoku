export function handleSelectCellAction(state, { selectedCell }) {
  const { selectedCell: currentSelectedCell } = state;

  if (
    currentSelectedCell &&
    currentSelectedCell.x === selectedCell.x &&
    currentSelectedCell.y === selectedCell.y
  ) {
    return {
      ...state,
      selectedCell: null
    };
  }
  
  return {
    ...state,
    selectedCell
  };
}
