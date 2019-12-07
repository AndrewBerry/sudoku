import React, { useEffect } from "react";
import { Controls } from "./Controls";

export function ControlsContainer({
  selectedCell,
  isInsertingValue,
  toggleWriteMode,
  toggleValue
}) {
  useEffect(() => {
    function handleKeyPress(e) {
      e.preventDefault();
      e.stopPropagation();

      const { key } = e;

      if (key === " ") {
        toggleWriteMode();
        return;
      }

      if (key < "1" || key > "9") {
        return;
      }

      toggleValue(key);
    }

    window.document.addEventListener("keypress", handleKeyPress);

    return () => {
      window.document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <Controls 
      selectedCell={selectedCell}
      isInsertingValue={isInsertingValue}
      toggleWriteMode={toggleWriteMode}
      toggleValue={toggleValue}
    />
  )
}
