import React from "react";
import { Board } from "../Board/Board";
import { ControlsContainer } from "../Controls/ControlsContainer";

import "./App.css";

export function App({
  selectCell,
  toggleWriteMode,
  toggleValue,

  board,
  selectedCell,
  isInsertingValue
}) {
  return (
    <div className="App">
      <Board board={board} selectedCell={selectedCell} selectCell={selectCell} />
      
      <ControlsContainer
        selectedCell={selectedCell && board[selectedCell.y][selectedCell.x]}
        isInsertingValue={isInsertingValue}
        toggleWriteMode={toggleWriteMode}
        toggleValue={toggleValue}
      />
    </div>
  );
}
