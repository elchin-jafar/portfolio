import React from 'react'
import classes from "./Button.module.css"

function Button({text, margin}) {
  return (
    <button className={`${classes['project-button']} ${margin ? classes.margin : undefined}`}>{text}</button>
  )
}

export default Button