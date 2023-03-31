import Button from "../components/button/Button";
import classes from "./Main.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Main() {
  return (
    <section id="main" className={classes.main}>
      <div className={classes.textContent}>
        <h2 className={classes["header-2"]}>Hey, I am Elchin Jafar</h2>
        <p className={classes.paragraph}>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web <br /> Applications that leads to the success of the overall
          product
        </p>
        <a href="#projects">
          <Button large>projects</Button>
        </a>
      </div>
      <div className={classes["mouse-animation"]}></div>
      <div className={classes.socials}>
        <a href="https://www.linkedin.com/in/elchin-jafarli/" target="_blank">
          <LinkedInIcon sx={{ fontSize: "5rem" }} />
        </a>
        <a href="https://github.com/elchin-jafar" target="_blank">
          <GitHubIcon sx={{ fontSize: "5rem" }} />
        </a>
      </div>
    </section>
  );
}

export default Main;
