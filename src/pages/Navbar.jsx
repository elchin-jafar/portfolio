import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className={classes.container}>
        <a href="#main" className={classes.logo}>
          Elchin Jafar
        </a>
        <div className={classes.hamburger} onClick={() => setIsMenuOpen(prevState => !prevState)}>
          <Hamburger direction="left" size={20} toggled={isMenuOpen} />
        </div>
        <div className={classes.navlinks}>
          <a href="#main">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        { isMenuOpen && <div className={classes.responsiveMenuContainer}>
          <div className={classes.responsiveMenu} onClick={(e) => {
              if(e.target.tagName === "A") setIsMenuOpen(false)
          }}>
            <a href="#main">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>}
      </div>
    </>
  );
}

export default Navbar;
