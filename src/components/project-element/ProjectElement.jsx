import classes from "./ProjectElement.module.css";
import Button from "../button/Button";
import flagMac from "../../assets/dopefolio.jpeg";

function ProjectElement({ img, title, info }) {
  return (
    <section className={classes["project-element"]}>
      <div className={classes.image}>
        <img src={flagMac} alt="" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.header}>Flag App</h2>
        <p className={classes["info-paragraph"]}>
          Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally
        </p>
        <Button small>case study</Button>
      </div>
    </section>
  );
}

export default ProjectElement;
