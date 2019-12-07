import React from "react";

import { NewGameButtonContainer } from "../NewGameButton/NewGameButtonContainer";
import { Board } from "../Board/Board";
import { ControlsContainer } from "../Controls/ControlsContainer";

import "./App.css";

export function App({
  selectCell,
  toggleWriteMode,
  toggleValue,
  newGame,

  board,
  selectedCell,
  isInsertingValue
}) {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Sudoku</h1>
        <div className="App__newGameContainer">
          <NewGameButtonContainer newGame={newGame} />
        </div>
      </header>

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
