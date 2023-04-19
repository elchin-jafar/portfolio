import classes from "./ProjectElement.module.css";
import Button from "../button/Button";

function ProjectElement({ img, title, info, link, codeLink }) {
  return (
    <section className={classes["project-element"]}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.header}>{title}</h2>
        <p className={classes["info-paragraph"]}>{info}</p>
        <div className={classes["button-holder"]}>
          <a href={link} target="_blank">
            <Button small>Case Study</Button>
          </a>
          <a href={codeLink} target="_blank">
            <Button outlined>code</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectElement;
