import React from "react";

import "./Board.css";
import { Cell } from "../Cell/Cell";

export function Board({ board, selectedCell, selectCell }) {
  if (!board) {
    return null;
  }

  return (
    <div className="Board">
      {board.map(
        (row, y) => row.map(
          (cell, x) => {
            const { value, candidates, isReadOnly, isError, isHighlighted } = cell;
            
            return (
              <Cell
                key={`${x},${y}`}

                x={x}
                y={y}
                value={value}
                candidates={candidates}
                isReadOnly={isReadOnly}
                isError={isError}
                isHighlighted={isHighlighted}
                selectedCell={selectedCell}

                selectCell={() => selectCell({ x, y })}
              />
            )
          }
        )
      )}
    </div>
  );
}
