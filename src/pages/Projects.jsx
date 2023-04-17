import Header from "../components/header/Header";
import ProjectElement from "../components/project-element/ProjectElement";
import classes from "./Projects.module.css";
import big from "../assets/project-screenshots/big.png";
import flagnation from "../assets/project-screenshots/flagnation.png";

function Projects() {
  return (
    <section id="projects" className={classes.projects}>
      <Header>projects</Header>
      <p className={classes["info-paragraph"]}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <ProjectElement
        img={flagnation}
        title="Flag App"
        info="Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally"
        link="https://elchin-jafar-flag-app.netlify.app"
      />
      <ProjectElement
        img={big}
        title="Instagram Clone"
        info="Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally"
        link="https://instagram-clone-vite.netlify.app"
      />
    </section>
  );
}

export default Projects;
