import React from "react";
import "./Button.css";

export function Button({className, children, ...props}) {
  return (
    <button
      className={`Button ${className || ""}`}
      {...props}
    >{children}</button>
  )
}
