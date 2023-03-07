import classes from "./Header.module.css"

function Header({content}) {
  return (
    <h2 className={classes['header-2']}>{content}</h2>
  )
}

export default Header