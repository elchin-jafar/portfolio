import classes from "./Header.module.css";

function Header({ children }) {
  return <h2 className={classes["header-2"]}>{children}</h2>;
}

export default Header;
