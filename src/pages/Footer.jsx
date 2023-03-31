import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import classes from "./Footer.module.css";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <section className={classes.footer}>
      <div className={classes.flex}>
        <div className={classes.sign}>
          <h2>Elchin Jafar</h2>
          <p className={classes["sign__p"]}>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className={classes.social}>
          <h2>Social</h2>
          <div className={classes.icons}>
            <a
              href="https://www.linkedin.com/in/elchin-jafarli/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/elchin-jafar" target="_blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        {" "}
        &copy; Copyright {currentYear}. Made by Elchin Jafar{" "}
      </div>
    </section>
  );
}

export default Footer;
