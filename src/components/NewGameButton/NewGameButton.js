import React from "react";

import { Button } from "../Button/Button";

import "./NewGameButton.css";

export function NewGameButton({
  isNewGameModalOpen,
  openNewGameModal,
  closeNewGameModal,
  newGame
}) {
  return (
    <div className="NewGameButton">
      <Button
        className="NewGameButton__btn"
        onClick={openNewGameModal}
      >New Game &#x25BE;</Button>
      
      {isNewGameModalOpen && (
        <div
          className="NewGameButton__backdrop"
          onClick={closeNewGameModal}
        ></div>
      )}

      {isNewGameModalOpen && (
        <div className="NewGameButton__menu">
          <Button onClick={() => newGame(0)}>Very Easy</Button>
          <Button onClick={() => newGame(1)}>Easy</Button>
          <Button onClick={() => newGame(2)}>Medium</Button>
          <Button onClick={() => newGame(3)}>Hard</Button>
        </div>
      )}
    </div>
  );
}
