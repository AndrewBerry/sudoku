import React, { useEffect } from "react";

import { App } from "./App";

import { useGameState } from "../../hooks/useGameState";
import { generatePuzzle } from "../../utils/generatePuzzle";

export function AppContainer() {
  const {
    newGame,
    selectCell,
    toggleWriteMode,
    toggleValue,

    board,
    selectedCell,
    isInsertingValue
  } = useGameState();

  useEffect(() => {
    newGame(0);
  }, []);

  return (
    <App
      board={board}
      selectedCell={selectedCell}
      isInsertingValue={isInsertingValue}
      selectCell={selectCell}
      toggleWriteMode={toggleWriteMode}
      toggleValue={toggleValue}
      newGame={newGame}
    />
  );
}
