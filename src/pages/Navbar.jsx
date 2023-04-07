import React, { useState, useRef } from "react";
import classes from "./Navbar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import { Transition } from "react-transition-group";

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nodeRef = useRef();

  return (
    <>
      <div className={classes.container}>
        <a href="#main" className={classes.logo}>
          Elchin Jafar
        </a>
        <div
          className={classes.hamburger}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <Hamburger direction="left" size={20} toggled={isMenuOpen} />
        </div>
        <div className={classes.navlinks}>
          <a href="#main">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <Transition
          nodeRef={nodeRef}
          in={isMenuOpen}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              ref={nodeRef}
              className={classes.responsiveMenuContainer}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <div
                className={classes.responsiveMenu}
                onClick={(e) => {
                  if (e.target.tagName === "A") setIsMenuOpen(false);
                }}
              >
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
}

export default Navbar;
