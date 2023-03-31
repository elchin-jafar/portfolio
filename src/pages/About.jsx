import React from "react";
import Button from "../components/button/Button";
import Chip from "../components/chip/Chip";
import Header from "../components/header/Header";
import classes from "./About.module.css";

function About() {
  return (
    <>
      <section id="about" className={classes.about}>
        <div className={classes["about-me"]}>
          <Header>about me</Header>
          <p className={classes.paragraph}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className={classes["about-me__down-side"]}>
          <div className={classes["get-to-know-me"]}>
            <h3 className={classes["header-3"]}>Get to know me!</h3>
            <p className={classes["down__paragraph"]}>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.{" "}
            </p>

            <p className={classes["down__paragraph"]}>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming{" "}
            </p>

            <p className={classes["down__paragraph"]}>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <a href="#contact">
              <Button small>contact</Button>
            </a>
          </div>
          <div className={classes["my-skills"]}>
            <h3 className={classes["header-3"]}>My Skills</h3>
            <div className={classes.skills}>
              <Chip text="HTML" />
              <Chip text="CSS" />
              <Chip text="JavaScript" />
              <Chip text="ReactJS" />
              <Chip text="SASS" />
              <Chip text="GIT" />
              <Chip text="Github" />
              <Chip text="Responsive Design" />
              <Chip text="SEO" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
