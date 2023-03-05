import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>Elchin Jafar</div>
        <div className={classes.navlinks}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
