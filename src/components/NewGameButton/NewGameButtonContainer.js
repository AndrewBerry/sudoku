import React, { useState } from "react";
import { NewGameButton } from "./NewGameButton";

export function NewGameButtonContainer({ newGame }) {
  const [ isNewGameModalOpen, setIsNewGameModalOpen ] = useState(false);

  function openNewGameModal() {
    setIsNewGameModalOpen(true);
  }

  function closeNewGameModal() {
    setIsNewGameModalOpen(false);
  }

  function newGameAndCloseModal(difficultyIndex, seed) {
    if (!window.confirm("Are you sure?")) {
      return;
    }

    newGame(difficultyIndex, seed);
    closeNewGameModal();
  }

  return (
    <NewGameButton
      isNewGameModalOpen={isNewGameModalOpen}
      openNewGameModal={openNewGameModal}
      closeNewGameModal={closeNewGameModal}
      newGame={newGameAndCloseModal}
    />
  );
}
