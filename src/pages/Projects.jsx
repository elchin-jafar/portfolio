import Header from "../components/header/Header";
import ProjectElement from "../components/project-element/ProjectElement";
import classes from "./Projects.module.css";

function Projects() {
  return (
    <section className={classes.projects}>
      <Header>projects</Header>
      <p className={classes["info-paragraph"]}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <ProjectElement />
    </section>
  );
}

export default Projects;
