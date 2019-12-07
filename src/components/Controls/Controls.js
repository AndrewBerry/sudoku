import React from "react";

import { Button } from "../Button/Button";
import { InsertModeIcon } from "../InsertModeIcon/InsertModeIcon";

import { className } from "../../utils/className";

import "./Controls.css";

export function Controls({ selectedCell, isInsertingValue, toggleWriteMode, toggleValue }) {
  return (
    <div className="Controls">
      {Array.from({ length: 9 }, (_, v) => {
        const isActive = (
          selectedCell &&
          !selectedCell.isReadOnly &&
          (
            (!isInsertingValue && selectedCell.candidates[v + 1 + ""]) ||
            (isInsertingValue && selectedCell.value === v + 1 + "")
          )
        );

        return (
          <Button
            key={v}
            onClick={() => toggleValue(v + 1 + "")}
            className={className({
              "Button--isActive": isActive,
              "Button--isDisabled": selectedCell && selectedCell.isReadOnly
            })}
          >{v + 1}</Button>
        );
      })}

      <Button
        onClick={() => toggleWriteMode()}
      ><InsertModeIcon isInsertingValue={isInsertingValue} /></Button>
    </div>
  );
}
