import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import "../../utils.css";

function Button(props) {
  const { large, mid, small, outlined, children } = props;
  return (
    <button
      className={clsx({
        [classes["project-button"]]: !outlined,
        small: small,
        mid: mid,
        large: large,
        [classes.outlined]: outlined,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
