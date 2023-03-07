import Header from "../components/header/Header";
import Button from "../components/button/Button";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <section className={classes.contact}>
      <Header>contact</Header>
      <p className={classes["info-paragraph"]}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className={classes.form}>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Your Name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <Button mid>submit</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
