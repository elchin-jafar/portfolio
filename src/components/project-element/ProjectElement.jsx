import classes from "./ProjectElement.module.css";
import Button from "../button/Button";


function ProjectElement({ img, title, info }) {
  return (
    <section className={classes["project-element"]}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.header}>{title}</h2>
        <p className={classes["info-paragraph"]}>{info}</p>
        <Button small>case study</Button>
      </div>
    </section>
  );
}

export default ProjectElement;
