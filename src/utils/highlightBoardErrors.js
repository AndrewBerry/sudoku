import { createValidationZones } from "./createValidationZones";
const validationZones = createValidationZones();

export function highlightBoardErrors(currentBoard) {
  if (!currentBoard) {
    return currentBoard;
  }

  const board = JSON.parse(JSON.stringify(currentBoard));

  validationZones.forEach(validationZone => {
    const values = validationZone
      .map(({ x, y }) => board[y][x].value)
      .filter(value => !!value);

    const duplicateValues = values.reduce(
      (duplicateValues, value) => {
        const hasDuplicates = values.indexOf(value) !== values.lastIndexOf(value);

        if (hasDuplicates && duplicateValues.indexOf(value) < 0) {
          return [
            ...duplicateValues,
            value
          ];
        }

        return duplicateValues;
      },
      []
    );

    if (duplicateValues.length === 0) {
      return;
    }

    validationZone.forEach(({ x, y }) => {
      if (duplicateValues.indexOf(board[y][x].value) >= 0) {
        board[y][x].isError = true;
      }
    });
  });
  
  return board;
}
