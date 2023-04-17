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
        info="Created simple 2 page flag app. Used Country API to get data about countries. "
        link="https://elchin-jafar-flag-app.netlify.app"
      />
      <ProjectElement
        img={big}
        title="Instagram Clone"
        info={`I use dummyjson to apply auth on login page. For images unsplash api used. You can use these credentials below to login:\nusername: kminchelle, \npassword: 0lelplR`}
        link="https://instagram-clone-vite.netlify.app"
      />
    </section>
  );
}

export default Projects;
