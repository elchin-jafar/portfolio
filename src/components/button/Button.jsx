import React from 'react'
import clsx from 'clsx'
import classes from "./Button.module.css"
import "../../utils.css"


function Button(props) {
  const {large, small, children} = props
  return (
    <button className={clsx(`${classes['project-button']}`, {
      'small': small,
      'large': large,
    })}>{children}</button>
  )
}

export default Button