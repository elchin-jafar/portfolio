import React from 'react'
import classes from "./Button.module.css"

function Button({text}) {
  return (
    <button className={classes['project-button']}>{text}</button>
  )
}

export default Button