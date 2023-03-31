import React from "react";
import classes from "./Navbar.module.css";
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {
  return (
    <>
      <div className={classes.container}>
        <a href="#main" className={classes.logo}>
          Elchin Jafar
        </a>
        <div className={classes.hamburger}>
          <Hamburger direction="left" size={20} />
        </div>
        <div className={classes.navlinks}>
          <a href="#main">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
