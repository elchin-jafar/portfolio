import React from 'react'
import classes from "./Chip.module.css"

function Chip({text}) {
  return (
    <div className={classes.chip}>{text}</div>
  )
}

export default Chip