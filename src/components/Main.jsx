import Button from "../button/Button"
import classes from "./Main.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Main() {
  return (
    <section className={classes.main} >
        <div className="textContent">
            <h2 className={classes['header-2']}>Hey, I am Elchin Jafar</h2>
            <p className={classes.paragraph}>A Frontend focused Web Developer building the Frontend of Websites and Web <br /> Applications that leads to the success of the overall product</p>
        </div>
            <Button text='projects' />
            <div className={classes['mouse-animation']}></div>
            <div className={classes.socials}> 
              <LinkedInIcon sx={{fontSize: '5rem'}} />
              <GitHubIcon sx={{fontSize: '5rem'}} />
            </div>
    </section>
  )
}

export default Main