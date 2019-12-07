import React, { useEffect } from "react";

import { App } from "./App";

import { useGameState } from "../../hooks/useGameState";
import { generatePuzzle } from "../../utils/generatePuzzle";

export function AppContainer() {
  const {
    newGame,
    setBoard,
    selectCell,
    toggleWriteMode,
    toggleValue,

    board,
    selectedCell,
    isInsertingValue
  } = useGameState();

  useEffect(() => {
    const savedBoard = window.localStorage.getItem("sudoku");
    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
      return;
    }

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
