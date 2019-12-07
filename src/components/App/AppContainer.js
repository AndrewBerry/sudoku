import React, { useEffect } from "react";

import { App } from "./App";

import { useGameState } from "../../hooks/useGameState";
import { createBlankBoard } from "../../utils/createBlankBoard";

export function AppContainer() {
  const {
    setBoard,
    selectCell,
    toggleWriteMode,
    toggleValue,

    board,
    selectedCell,
    isInsertingValue
  } = useGameState();

  useEffect(() => {
    setBoard(createBlankBoard());
  }, []);

  return (
    <App
      board={board}
      selectedCell={selectedCell}
      isInsertingValue={isInsertingValue}

      selectCell={selectCell}
      toggleWriteMode={toggleWriteMode}
      toggleValue={toggleValue}
    />
  );
}
