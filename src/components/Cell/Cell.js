import React from "react";
import "./Cell.css";
import { className } from "../../utils/className";

export function Cell({
  x,
  y,
  value,
  isReadOnly,
  isError,
  isHighlighted,
  candidates,
  selectedCell,

  selectCell
}) {
  return (
    <div
      className={className({
        "Cell": true,
        "Cell--isSelected": selectedCell && selectedCell.x === x && selectedCell.y === y,
        "Cell--isHighlighted": isHighlighted,
      })}
      data-x={x}
      data-y={y}
      onClick={selectCell}
    >
      {
        !!value ?
          (
            <div
              className={className({
                "Cell__value": true,
                "Cell__value--isReadOnly": isReadOnly,
                "Cell__value--isError": isError,
              })}
            >{value}</div>
          ) :
          (
            Object.entries(candidates)
              .filter(([ _candidate, enabled ]) => !!enabled)
              .map(([ candidate ]) => candidate)
              .map(candidate => (
                <div
                  key={candidate}
                  className="Cell__candidate"
                  style={{gridArea: `_${candidate}`}}
                  data-cx={Math.floor((parseInt(candidate) - 1) % 3)}
                  data-cy={Math.floor((parseInt(candidate) - 1) / 3)}
                >{candidate}</div>
              ))
          )
      }
    </div>
  );
}
