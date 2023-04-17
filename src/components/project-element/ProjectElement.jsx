import classes from "./ProjectElement.module.css";
import Button from "../button/Button";

function ProjectElement({ img, title, info, link }) {
  return (
    <section className={classes["project-element"]}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.header}>{title}</h2>
        <p className={classes["info-paragraph"]}>{info}</p>
        <a href={link} target="_blank">
          <Button small>Case Study</Button>
        </a>
      </div>
    </section>
  );
}

export default ProjectElement;
