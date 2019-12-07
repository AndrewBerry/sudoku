import React from "react";
import { className } from "../../utils/className";
import "./InsertModeIcon.css";

export function InsertModeIcon({ isInsertingValue }) {
  return (
    <span
      className={className({
        "InsertModeIcon": true,
        "InsertModeIcon--candidate": !isInsertingValue,
        "InsertModeIcon--value": isInsertingValue
      })}
    >&nbsp;</span>
  );
}
